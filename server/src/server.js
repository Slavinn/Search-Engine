const express = require("express");
const cors = require("cors");
const algoliasearch = require("algoliasearch");
require("dotenv").config();

const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);
const index = client.initIndex(process.env.INDEX_ID);
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});

app.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const response = await index.search(query);
  if (response.hits === 0) {
    res.status(204).send({ error: "No content found" });
  } else {
    res.status(200).json(response);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
