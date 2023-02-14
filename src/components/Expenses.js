import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import YearFilter from './YearFilter';

const Expenses = (props) => {
  const [filter, setFilter] = useState('2021');

  const chooseFilterHandler = (ChosenFilter) => {
    setFilter(ChosenFilter);
  };

  return (
    <div>
      <div className="expenses">
        <YearFilter selected={filter} onYearFilter={chooseFilterHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </div>
    </div>
  );
};

export default Expenses;
