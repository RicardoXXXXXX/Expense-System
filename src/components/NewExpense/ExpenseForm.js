import "./ExpenseForm.css";
import React, { useState } from "react";

//Here the "props" is the pointer of onSubmmitExpenseData() which is defined in NewExpense.js.
const ExpenseForm = (props) => {
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
  //Set states
  const [userInputTitle, setTitle] = useState("");
  const [userInputAmount, setAmount] = useState("");
  const [userInputDate, setDate] = useState("");
  const [titleValidity, setTitleVilidity] = useState("(Invalid Title)"); //State to check input validility
  //event automatically receives the input
  const titleChangeHandler = (event) => {
    let title = event.target.value;
    setTitle(title);

    //Check input title's validility
    if (title.trim().length < 1) {
      setTitleVilidity("(Invalid Title)");
    } else {
      setTitleVilidity("(Valid Title)");
    }
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  //Submit handler
  const submitHandler = (event) => {
    //Prevent auto-submitting when clicking the "submit" button, so this function can do some management.
    event.preventDefault();
    //Store submitted data
    const expenseData = {
      title: userInputTitle,
      amount: userInputAmount,
      date: new Date(userInputDate), //Important to use new Date(), otherwise it will be a String rather than a Date object.
    };
    //Add new expense
    props.onSubmmitExpenseData(expenseData);

    //Clear prev submission
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title {titleValidity}</label>
          <input
            type="text"
            /* make sure the value in the input box always matches the current state, i.e. make box able to be cleared after submitting */
            value={userInputTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInputAmount}
            min="0"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-07-30"
            max="2100-01-01"
            value={userInputDate}
            onChange={(event) => {
              setDate(event.target.value);
            }}
            required
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
