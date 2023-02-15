import React from 'react';
import TransactionDate from '../Transactions/TransactionDate';
import './IncomeItem.css';

const IncomeItem = (props) => {
  return (
    <div className="income-item">
      <TransactionDate date={props.date} />
      <div className="income-item__description">
        <h2>{props.title}</h2>
        <div className="income-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default IncomeItem;
