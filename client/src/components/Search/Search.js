import { useContext, useState } from "react";
import SearchResultContext from "../store/searchresults-context";
import SearchForm from "./SearchForm";
import ResultPage from "../Results/ResultPage";
import classes from "./Search.module.css";

function Search() {
  const ctxSearchResult = useContext(SearchResultContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearchQueryHandler = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/search/${query}`);

      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      ctxSearchResult.addSearch(data.query);
      ctxSearchResult.addResults(data.hits);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  let content = "";

  if (ctxSearchResult > 0) {
  }

  return (
    <div className={classes["search-container"]}>
      <h2 className={classes["search-title"]}>Search Engine</h2>
      <SearchForm fetchQuery={fetchSearchQueryHandler} />
      {<ResultPage />}
    </div>
  );
}

export default Search;
