import "./Card.css";
//
const Card = (props) => {
  const classes = "card " + props.className; //There MUST be a space after "card".

  return <div className={classes}>{props.children}</div>; //.children is a in-build attribute that receives all the cotent between function start and end (<func> </func>).
};

export default Card;
