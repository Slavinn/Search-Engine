import Search from "./components/Search/Search";
import SearchResultProvider from "./components/store/SearchResultProvider";

import "./App.css";

function App() {
  return (
    <SearchResultProvider>
      <Search />
    </SearchResultProvider>
  );
}

export default App;
