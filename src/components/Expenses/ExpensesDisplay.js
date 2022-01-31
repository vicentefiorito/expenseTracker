import ExpenseItem from "./ExpenseItem";
import './ExpensesDisplay.css';
import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesDisplay(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                
                 <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                 {filteredExpenses.map(expense => (
                 <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                 />
                 ))}
            </Card>
        </div>
        )
}

export default ExpensesDisplay;