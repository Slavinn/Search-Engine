import { useReducer } from "react";
import SearchResultContext from "./searchresults-context";

const defaultSearchState = {
  search: "",
  results: [],
  history: [],
};

const searchReducer = (state, action) => {
  if (action.type === "ADD_SEARCH") {
    console.log(action.search);
    return {
      search: action.search,
      ...state,
    };
  }
  if (action.type === "ADD_RESULTS") {
    return {
      results: action.results,
      ...state,
    };
  }
  if (action.type === "ADD_HISTORY") {
    const updatedHistory = [state.history, ...action.history];
    return {
      history: updatedHistory,
      ...state,
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
    <SearchResultContext.Provider value={searchState}>
      {props.children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultProvider;
