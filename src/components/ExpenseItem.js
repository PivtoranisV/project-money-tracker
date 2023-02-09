import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const year = props.date.toLocaleString('en-GB', {
    year: 'numeric',
  });
  const month = props.date.toLocaleString('en-GB', {
    month: 'long',
  });
  const day = props.date.toLocaleString('en-GB', {
    day: 'numeric',
  });

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
