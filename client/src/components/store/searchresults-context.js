import React from "react";

const SearchResultContext = React.createContext({
  search: "",
  results: [],
  queries: [],
  addSearch: (search) => {},
  addResults: (results) => {},
  clearHistroy: () => {},
});

export default SearchResultContext;
