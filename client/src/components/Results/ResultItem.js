import Card from "../../UI/Card/Card";
import classes from "./ResultItem.module.css";

const ResultItem = (props) => {
  return (
    <Card className={classes.resultItem}>
      <a href={props.permalink}>
        <h3>{props.post_title}</h3>
      </a>
      <p className={classes.content}>{props.content}</p>
      <p>Author: {props.author_name}</p>
      <span>{props.post_date_formatted} </span>
    </Card>
  );
};

export default ResultItem;
