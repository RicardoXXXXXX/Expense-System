import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

//props includes all inputs
const ExpenseItem = (props) => {
  //useState() Make component function renewable, can only be called in component function.
  const [title, setTitle] = useState(props.title); //title is the managed props.title, it's now renewable, every title has an independent state. setTitle is a func to set title.
  const clickHandler = () => {
    setTitle("Changed");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
