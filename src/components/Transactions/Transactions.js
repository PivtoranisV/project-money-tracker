import React, { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import IncomeItem from '../Incomes/IncomeItem';
import YearFilter from '../Filter/YearFilter';
import './Transactions.css';

const Expenses = (props) => {
  const [filter, setFilter] = useState('2021');

  const chooseFilterHandler = (ChosenFilter) => {
    setFilter(ChosenFilter);
  };

  return (
    <div>
      <div className="transactions">
        <YearFilter selected={filter} onYearFilter={chooseFilterHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {props.incomes.map((income) => (
          <IncomeItem
            title={income.title}
            amount={income.amount}
            date={income.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
