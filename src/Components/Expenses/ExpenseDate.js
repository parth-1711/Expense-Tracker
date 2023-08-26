import './ExpenseDate.css'

function ExpenseDate(props){
    let temp=new Date(props.date)
    const month=temp.toLocaleString('en-us',{month:'long'});
    const day=temp.toLocaleString('en-us',{day:'2-digit'});
    const year=temp.getFullYear();
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;