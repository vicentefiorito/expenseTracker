import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
    //adds the expense items as an array
    const expenseItems = [
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
    ]
  return (
    <div className="App">
     <h2>Let's get started</h2>
      <ExpenseItem 
        title={expenseItems[0].title} 
        amount={expenseItems[0].amount} 
        date={expenseItems[1].date}
      />
      <ExpenseItem 
        title={expenseItems[1].title} 
        amount={expenseItems[1].amount} 
        date={expenseItems[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenseItems[2].title} 
        amount={expenseItems[2].amount} 
        date={expenseItems[2].date}
      />
      <ExpenseItem 
        title={expenseItems[3].title} 
        amount={expenseItems[3].amount} 
        date={expenseItems[3].date}
      />
      <ExpenseItem 
        title={expenseItems[4].title} 
        amount={expenseItems[4].amount} 
        date={expenseItems[4].date}
     />
    </div>
  );
  
}

export default App;
