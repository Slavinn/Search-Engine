import { useContext, useState, Fragment } from "react";
import SearchResultContext from "../store/searchresults-context";
import SearchForm from "./SearchForm";
import Header from "../Header/Header";
import ResultPage from "../Results/ResultPage";
import classes from "./Search.module.css";

function Search(props) {
  const ctxSearchResult = useContext(SearchResultContext);

  const fetchSearchQueryHandler = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/search/${query}`);
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      ctxSearchResult.addSearch(data.query);
      ctxSearchResult.addResults(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {ctxSearchResult.results.length === 0 && (
        <div className={`${classes["search-container"]} ${classes["search"]}`}>
          <h2 className={classes["search-title"]}>Search Engine</h2>
          <SearchForm fetchQuery={fetchSearchQueryHandler} />
        </div>
      )}
      {ctxSearchResult.results.length > 0 && (
        <div>
          <Header fetchQuery={fetchSearchQueryHandler} />

          <ResultPage fetchQuery={fetchSearchQueryHandler} />
        </div>
      )}
    </Fragment>
  );
}

export default Search;
