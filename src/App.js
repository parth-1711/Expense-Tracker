// import ExpenseItem from "./Components/Expenses/ExpenseItem";
import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
// import ExpenseForm from "./Components/NewExpense/ExpenseForm";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const Dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const[expenses,setExpenses]=useState(Dummy_expenses);
  const addExpenseHadler=(expense)=>{
    // console.log('In App.js');
    // console.log(expense);
    setExpenses(prevExpenses=>{return [expense , ...prevExpenses]})
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
