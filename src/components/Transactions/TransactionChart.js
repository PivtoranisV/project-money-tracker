import React from 'react';
import Chart from '../Chart/Chart';

const TransactionChart = (props) => {
  const chartDataExpPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  const chartDataIncPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataExpPoints[expenseMonth].value += expense.amount;
  }

  for (const income of props.incomes) {
    const incomeMonth = new Date(income.date).getMonth();
    chartDataIncPoints[incomeMonth].value += income.amount;
  }

  return (
    <div>
      <Chart
        dataExpPoints={chartDataExpPoints}
        dataIncPoints={chartDataIncPoints}
      />
    </div>
  );
};

export default TransactionChart;
