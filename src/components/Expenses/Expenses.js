import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import YearFilter from '../Filter/YearFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filter, setFilter] = useState('2021');

  const chooseFilterHandler = (ChosenFilter) => {
    setFilter(ChosenFilter);
  };

  return (
    <div>
      <div className="expenses">
        <YearFilter selected={filter} onYearFilter={chooseFilterHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
