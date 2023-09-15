import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

//This is for initializing the useState
const dummy_expenses = [
  { id: "1", title: "A", amount: 100, date: new Date(2023, 7, 28) },
];

function App() {
  //Set the sate of expenses array, so we can re-render it.
  const [expenses, setExpense] = useState(dummy_expenses);
  const addExpenseHandler = (newExpense) => {
    setExpense((prev) => {
      return [...prev, newExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
