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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilteredYear}
        onFilterChange={filterChangeHandler}
      />
      {/* Use map() to display the array of expense*/}
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.anount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
