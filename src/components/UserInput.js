import React, { useState } from 'react';
import ExpenseButton from './ExpenseButton';
import IncomeButton from './IncomeButton';

import './UserInput.css';

const UserInput = () => {
  const [formData, setFormData] = useState({ title: '', amount: '', date: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ title: '', amount: '', date: '' });
  };

  const handleExpenseButton = () => {
    console.log('Expense submitted', formData);
  };

  const handleIncomeButton = () => {
    console.log('Income submitted', formData);
  };

  return (
    <div className="user-input">
      <form onSubmit={handleSubmit}>
        <div className="user-input__controls">
          <div className="user-input__control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="user-input__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.50"
              step="0.50"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="user-input__control">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="user-input__actions">
            <ExpenseButton handleButtonPress={handleExpenseButton} />
            <IncomeButton handleButtonPress={handleIncomeButton} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
