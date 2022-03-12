import { useContext, useEffect, useState } from "react";
import Search from "./components/Search/Search";
import SearchResultProvider from "./components/store/SearchResultProvider";
import ResultPage from "./components/Results/ResultPage";
import "./App.css";
import SearchResultContext from "./components/store/searchresults-context";

function App() {
  return (
    <SearchResultProvider>
      <Search />
    </SearchResultProvider>
  );
}

export default App;
