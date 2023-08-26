import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  // const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.expenses.filter((expense)=>{
    let temp=new Date(expense.date)
    return temp.getFullYear().toString()===filteredYear
  });
  // console.log(filteredExpenses);
  return (
    <li>
      
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {/* {expenseContent} */}
        <ExpensesList filterdList={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
