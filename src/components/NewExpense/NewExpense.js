import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

//Here the "props" is the pointer of addExpenseHandler() which is defined in App.js.
const NewExpense = (prop) => {
  const submitExpenseHandler = (inputExpenseData) => {
    let expenseData = {
      ...inputExpenseData,
      id: Math.floor(Math.random() * 1000).toString(), //Generate a new id which is <1000.
    };

    prop.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Pass the pointer of onSubmmitExpenseData() to the ExpenseForm component */}
      <ExpenseForm onSubmmitExpenseData={submitExpenseHandler} />
    </div>
  );
};

export default NewExpense;
