import ExpenseItem from "./ExpenseItem";
import './ExpensesDisplay.css';
import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

                <ExpensesList expenses={filteredExpenses}/>
                    
            </Card>
        </div>
        )
}

export default ExpensesDisplay;