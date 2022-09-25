import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Home Utilizes', date:  new Date('August 20, 69 12:12:25'), price: 208.08 },
  { id: 'e2', title: 'Car Insurence', date: new Date('March 30, 69 00:20:18'), price: 56123 },
  { id: 'e3', title: 'Current Bill', date: new Date('April 28, 69 00:20:18'), price: 100.567 },
  { id: 'e4', title: 'Cooking objects', date: new Date('December 05, 69 00:20:18'), price: 7647.09 },
  { id: 'e5', title: 'New Desk (Wooden)', date: new Date('July 09, 69 00:20:18'), price: 74345.45 },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
