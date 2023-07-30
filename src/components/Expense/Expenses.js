import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
const Expenses = () => {
  const expenses = [
    { id: "1", title: "A", anount: 100, date: new Date(2023, 7, 28) },
    { id: "2", title: "B", anount: 200, date: new Date(2023, 7, 29) },
    { id: "3", title: "C", anount: 300, date: new Date(2023, 7, 30) },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].anount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].anount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].anount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;
