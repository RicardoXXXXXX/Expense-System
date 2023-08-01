import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  //  Example of using one state to manage inputs
  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  // // titleChangeHandler automatically receive the input as "event" atttribute
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, inputTitle: event.target.value }; //pull out all input, only change the amount, return updated state
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, inputAmount: event.target.value }; //pull out all input, only change the amount, return updated state
  //   });
  // };

  //Use multi-state is easier
  const [userInputTitle, setTitle] = useState("");
  const [userInputAmount, setAmount] = useState("");
  const [userInputDate, setDate] = useState("");

  //event automatically receives the input
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-07-30"
            max="2100-01-01"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
