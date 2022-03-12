import Card from "../../UI/Card/Card";
import classes from "./ResultItem.module.css";

const ResultItem = (props) => {
  return (
    <Card className={classes.resultItem}>
      <h3>
        <a href={props.permalink}>{props.post_title}</a>
      </h3>
      <p className={classes.content}>
        <span>{props.post_date_formatted} </span>
        {props.content}
      </p>
      <div className={classes["post-details"]}>
        <p>Author: {props.author_name}</p>
      </div>
    </Card>
  );
};

export default ResultItem;
