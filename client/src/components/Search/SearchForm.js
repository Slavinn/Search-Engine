import { useState } from "react";

const SearchForm = (props) => {
  const [query, setQuery] = useState("");

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.fetchQuery(query);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          className="search-input-box"
          type="text"
          value={query}
          onChange={searchChangeHandler}
          id="search-text"
        />
        <button className="search-btn">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
