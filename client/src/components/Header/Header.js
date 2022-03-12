import SearchForm from "../Search/SearchForm";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <SearchForm
        className={classes["header-search-form"]}
        fetchQuery={props.fetchQuery}
      />
      <nav className={classes.navigation}>
        <li>
          <a href="#">Images</a>
        </li>
        <li>
          <a href="#">Maps</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
