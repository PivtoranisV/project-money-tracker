import React from 'react';
import './TransactionDate.css';

const TransactionDate = (props) => {
  const correctDate = new Date(props.date);

  const year = correctDate.toLocaleString('en-GB', {
    year: 'numeric',
  });
  const month = correctDate.toLocaleString('en-GB', {
    month: 'long',
  });
  const day = correctDate.toLocaleString('en-GB', {
    day: 'numeric',
  });

  return (
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__day">{day}</div>
      <div className="date__year">{year}</div>
    </div>
  );
};

export default TransactionDate;
