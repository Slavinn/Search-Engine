import { useReducer } from "react";
import SearchResultContext from "./searchresults-context";

const defaultSearchState = {
  search: "",
  results: [],
  history: [],
};

const searchReducer = (state, action) => {
  if (action.type === "ADD_SEARCH") {
    return {
      ...state,
      search: action.search,
    };
  }
  if (action.type === "ADD_RESULTS") {
    const updatedResults = action.results;
    return {
      ...state,
      results: updatedResults,
    };
  }
  if (action.type === "ADD_HISTORY") {
    const updatedHistory = [state.history, ...action.history];
    return {
      ...state,
      history: updatedHistory,
    };
  }
  if (action.type === "CLEAR_SEARCH") {
  }
  if (action.type === "CLEAR_RESULTS") {
  }
  if (action.type === "CLEAR_HISTORY") {
  }
  return defaultSearchState;
};

const SearchResultProvider = (props) => {
  const [searchState, dispatchSearchAction] = useReducer(
    searchReducer,
    defaultSearchState
  );

  const addSearchToQueriesHandler = (search) => {
    dispatchSearchAction({ type: "ADD_SEARCH", search });
  };

  const addResultsToQueriesHandler = (results) => {
    dispatchSearchAction({ type: "ADD_RESULTS", results });
  };

  const clearHistoryHandler = () => {
    dispatchSearchAction({ type: "CLEAR" });
  };

  const searchContext = {
    search: searchState.search,
    results: searchState.results,
    history: searchState.history,
    addSearch: addSearchToQueriesHandler,
    addResults: addResultsToQueriesHandler,
    clearHistory: clearHistoryHandler,
  };

  return (
    <SearchResultContext.Provider value={searchContext}>
      {props.children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultProvider;
