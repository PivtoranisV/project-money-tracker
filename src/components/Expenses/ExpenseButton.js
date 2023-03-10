import React from 'react';
import './ExpenseButton.css';

const ExpenseButton = (props) => {
  return (
    <button
      className="expense-button"
      type="button"
      onClick={props.handleButtonPress}
    >
      Add Expenses
    </button>
  );
};

export default ExpenseButton;
