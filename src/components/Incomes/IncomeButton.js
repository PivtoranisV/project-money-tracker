import React from 'react';
import './IncomeButton.css';

const IncomeButton = (props) => {
  return (
    <button
      className="income-button"
      type="button"
      onClick={props.handleButtonPress}
    >
      Add Income
    </button>
  );
};

export default IncomeButton;
