const express = require("express");
const cors = require("cors");
const algoliasearch = require("algoliasearch");

const client = algoliasearch("L3GPNXZ92X", "3dacf88b3f6cceea33bf86634058a9d1");
const index = client.initIndex("media-1647020271");
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
    res.status(204).json({ error: "No content found" });
  } else {
    res.json(response);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
