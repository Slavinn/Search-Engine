import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
} from "react";
import SearchResultContext from "../store/searchresults-context";
import SearchForm from "./SearchForm";
import ResultPage from "../Results/ResultPage";
import classes from "./Search.module.css";

function Search(props) {
  const ctxSearchResult = useContext(SearchResultContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isResult, setIsResult] = useState(false);

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
      setIsResult(true);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
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
        <div className={classes["results"]}>
          <SearchForm fetchQuery={fetchSearchQueryHandler} />
          <ResultPage fetchQuery={fetchSearchQueryHandler} />
        </div>
      )}
    </Fragment>
  );
}

export default Search;
