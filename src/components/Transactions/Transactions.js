import React, { useState } from 'react';
import YearFilter from '../Filter/YearFilter';
import ExpensesList from '../Expenses/ExpensesList';
import IncomesList from '../Incomes/IncomesList';
import TransactionChart from './TransactionChart';
import './Transactions.css';

const Transactions = (props) => {
  const [filter, setFilter] = useState('2023');

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
        <TransactionChart
          expenses={filteredExpenses}
          incomes={filteredIncomes}
        />
        <ExpensesList expenseItems={filteredExpenses} />
        <IncomesList incomeItems={filteredIncomes} />
      </div>
    </div>
  );
};

export default Transactions;
