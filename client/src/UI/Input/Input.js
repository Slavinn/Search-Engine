const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type || "text"}
      value={props.value}
      onChange={props.onChange}
      id="search-text"
    />
  );
};

export default Input;
