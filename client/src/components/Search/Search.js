import { useContext, useState } from "react";
import SearchResultContext from "../store/searchresults-context";
import SearchResultProvider from "../store/SearchResultProvider";
import "./Search.css";
import SearchForm from "./SearchForm";

function Search(props) {
  const ctxSearchResult = useContext(SearchResultContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearchQueryHandler = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/search/${query}`);
      const data = await response.json();
      if (response.ok) {
        throw new Error("Somethig went wrong!");
      }
      ctxSearchResult.addResults(data.hits);
      ctxSearchResult.addSearch(data.query);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  let content = "";

  if (ctxSearchResult > 0) {
  }

  return (
    <SearchResultProvider>
      <SearchForm fetchQuery={fetchSearchQueryHandler} />
      {ctxSearchResult.results.map((result) => {
        <p>{result}</p>;
      })}
    </SearchResultProvider>
  );
}

export default Search;
