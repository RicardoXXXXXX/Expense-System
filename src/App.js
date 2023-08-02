import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "1", title: "A", anount: 100, date: new Date(2023, 7, 28) },
    { id: "2", title: "B", anount: 200, date: new Date(2023, 7, 29) },
    { id: "3", title: "C", anount: 300, date: new Date(2023, 7, 30) },
  ];
  const addExpenseHandler = () => {};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
