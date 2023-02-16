import React from 'react';
import IncomeItem from './IncomeItem';
import './IncomesList.css';

const IncomesList = (props) => {
  if (props.incomeItems.length === 0) {
    return <h2 className="incomes-list__fallback">No income found</h2>;
  }

  return (
    <ul className="incomes-list">
      {props.incomeItems.map((income) => (
        <IncomeItem
          key={income.id}
          title={income.title}
          amount={income.amount}
          date={income.date}
        />
      ))}
    </ul>
  );
};

export default IncomesList;
