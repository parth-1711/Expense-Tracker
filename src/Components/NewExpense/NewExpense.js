import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpensedata)=>{
        const expenseData={
            ...enteredExpensedata,
            id:Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData)
    }
    
    const [isEditing,setIsEditing]=useState(false)
    const startEditHandler=()=>{
        setIsEditing(true);
    }
    const stopEditHandler=()=>{
        setIsEditing(false);
    }
    return <div className='new-expense'>
        {/* {formContent} */}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler}/>}
        {!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}
    </div>
}

export default NewExpense;