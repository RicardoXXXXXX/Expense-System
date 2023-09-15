import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  //Set up the state of filterYear
  //2023 will be set as default year
  const [FilteredYear, setFilteredYear] = useState("2023");

  //Add filter function
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Add filter to render the expense based on the year
  const checkYear = (expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  };
  const filtedExpenses = props.expenses.filter(checkYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilteredYear}
        onFilterChange={filterChangeHandler}
      />
      {/* Use map() to display the array of expense*/}
      {filtedExpenses.map((expense) => (
        <ExpenseItem
          /* Indentify each specific item, Important for list items*/
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
