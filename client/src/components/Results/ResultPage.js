import { useContext } from "react";

import ResultItem from "./ResultItem";
import SearchResultContext from "../store/searchresults-context";
import classes from "./ResultPage.module.css";

function ResultPage() {
  const ctxSearchResult = useContext(SearchResultContext);
  const resultList = ctxSearchResult.results.map((result) => {
    return (
      <ResultItem
        key={Math.random()}
        post_id={result.post_id}
        post_title={result.post_title}
        post_date={result.post_date}
        post_date_formatted={result.post_date_formatted}
        author_name={result.author_name}
        author_image_url={result.author_image_url}
        permalink={result.permalink}
        categories={result.categories}
        content={result.content}
      />
    );
  });
  return <div className={classes["result-container"]}>{resultList}</div>;
}

export default ResultPage;
