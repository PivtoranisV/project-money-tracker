import { useState } from 'react';

import './index.css';
import Expenses from './components/Expenses/Expenses';
import UserInput from './components/UserInput/UserInput';

const DUMMY_LIST = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(DUMMY_LIST);
  const [incomeData, setIncomeData] = useState(DUMMY_LIST);

  const saveExpenseHandler = (data) => {
    setExpenseData((prevData) => [data, ...prevData]);
  };

  const saveIncomeHandler = (data) => {
    setIncomeData(() => {
      const newIncomeData = {
        ...data,
        id: Math.random().toString(),
      };
      console.log('Income data from App.js', newIncomeData);
      return newIncomeData;
    });
  };

  return (
    <div className="App">
      <h1>Money Tracker</h1>
      <UserInput
        onSaveExpense={saveExpenseHandler}
        onSaveIncome={saveIncomeHandler}
      />
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;
