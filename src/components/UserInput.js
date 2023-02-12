import React from 'react';
import ExpenseButton from './ExpenseButton';
import IncomeButton from './IncomeButton';

import './UserInput.css';

const UserInput = () => {
  return (
    <div className="user-input">
      <form>
        <div className="user-input__controls">
          <div className="user-input__control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="user-input__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="user-input__control">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="user-input__actions">
            <ExpenseButton />
            <IncomeButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
