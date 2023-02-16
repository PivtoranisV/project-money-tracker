import { useState } from 'react';

import './index.css';
import Transactions from './components/Transactions/Transactions';
import UserInput from './components/UserInput/UserInput';

const DUMMY_EXP = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
];

const DUMMY_INC = [
  {
    id: 'e3',
    title: 'Dividends',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Salary',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(DUMMY_EXP);
  const [incomeData, setIncomeData] = useState(DUMMY_INC);

  const saveExpenseHandler = (data) => {
    setExpenseData((prevData) => [
      { id: prevData.length + 1, ...data },
      ...prevData,
    ]);
  };

  const saveIncomeHandler = (data) => {
    setIncomeData((prevData) => [
      { id: prevData.length + 1, ...data },
      ...prevData,
    ]);
  };

  return (
    <div className="App">
      <h1>Money Tracker</h1>
      <UserInput
        onSaveExpense={saveExpenseHandler}
        onSaveIncome={saveIncomeHandler}
      />
      <Transactions expenses={expenseData} incomes={incomeData} />
    </div>
  );
}

export default App;
