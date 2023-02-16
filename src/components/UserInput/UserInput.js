import React, { useState } from 'react';
import ExpenseButton from '../Expenses/ExpenseButton';
import IncomeButton from '../Incomes/IncomeButton';
import './UserInput.css';

const UserInput = (props) => {
  const [formData, setFormData] = useState({ title: '', amount: '', date: '' });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ title: '', amount: '', date: '' });
  };

  const handleExpenseButton = () => {
    props.onSaveExpense(formData);
    setFormData({ title: '', amount: '', date: '' });
  };

  const handleIncomeButton = () => {
    props.onSaveIncome(formData);
    setFormData({ title: '', amount: '', date: '' });
  };

  const handleTransactionButton = () => {
    setIsClicked(true);
  };

  const handleCancel = () => {
    setIsClicked(false);
  };

  if (!isClicked) {
    return (
      <div className="user-input">
        <button
          type="submit"
          className="transaction-button"
          onClick={handleTransactionButton}
        >
          Open Input
        </button>
      </div>
    );
  }

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
      <button type="button" onClick={handleCancel} className="cancel-button">
        Close Input
      </button>
    </div>
  );
};

export default UserInput;
