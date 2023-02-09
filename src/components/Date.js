import React from 'react';
import './Date.css';

const Date = (props) => {
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
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__day">{day}</div>
      <div className="date__year">{year}</div>
    </div>
  );
};

export default Date;
