import React, { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import IncomeItem from '../Incomes/IncomeItem';
import YearFilter from '../Filter/YearFilter';
import './Transactions.css';

const Transactions = (props) => {
  const [filter, setFilter] = useState('2021');

  const chooseFilterHandler = (ChosenFilter) => {
    setFilter(ChosenFilter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === filter
  );
  const filteredIncomes = props.incomes.filter(
    (income) => new Date(income.date).getFullYear().toString() === filter
  );

  return (
    <div>
      <div className="transactions">
        <YearFilter selected={filter} onYearFilter={chooseFilterHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {filteredIncomes.map((income) => (
          <IncomeItem
            key={income.id}
            title={income.title}
            amount={income.amount}
            date={income.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
