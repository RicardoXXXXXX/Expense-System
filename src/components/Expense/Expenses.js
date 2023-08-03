import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
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
