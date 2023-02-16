import React from 'react';
import IncomeChartBar from './IncomeChartBar';
import ExpenseChartBar from './ExpenseChartBar';
import './Chart.css';

const Chart = (props) => {
  const arrayExpValue = props.dataExpPoints.map(
    (dataExpPoint) => dataExpPoint.value
  );
  const arrayIncValue = props.dataIncPoints.map(
    (dataIncPoint) => dataIncPoint.value
  );

  const totalMaxExp = Math.max(...arrayExpValue);
  const totalMaxInc = Math.max(...arrayIncValue);

  return (
    <div className="chart">
      {props.dataExpPoints.map((dataExpPoint) => (
        <ExpenseChartBar
          key={dataExpPoint.label}
          value={dataExpPoint.value}
          maxValue={totalMaxExp}
          label={dataExpPoint.label}
        />
      ))}
      {props.dataIncPoints.map((dataIncPoint) => (
        <IncomeChartBar
          key={dataIncPoint.label}
          value={dataIncPoint.value}
          maxValue={totalMaxInc}
          label={dataIncPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
