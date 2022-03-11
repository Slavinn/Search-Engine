import { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./SearchForm.module.css";

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
        <Input
          className={classes["search-input-box"]}
          type="text"
          value={query}
          onChange={searchChangeHandler}
          id="search-text"
        />
        <Button className={classes["search-btn"]}>Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
