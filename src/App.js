import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ExpensesDisplay from './components/Expenses/ExpensesDisplay';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1', title: 'Manga Haul', amount: 75.24, date: new Date(2022,0, 25)},
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'New Books',
    amount: 243.75,
    date: new Date(2022, 1, 27),
  }
]

function App() {
    //adds the expense items as an array
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
          return [expense, ...prevExpenses];
        } );
    }

  return (
    <div className="App">
     <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesDisplay expenses={expenses}/>
    </div>
  );
  
}

export default App;
