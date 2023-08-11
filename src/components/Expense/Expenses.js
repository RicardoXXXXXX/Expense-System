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
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].anount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].anount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].anount}
        date={props.expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;
