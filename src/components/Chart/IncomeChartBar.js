import React from 'react';
import './IncomeChartBar.css';

const IncomeChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar-inc">
      <div className="chart-bar-inc__inner">
        <div
          className="chart-bar-inc__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar-inc__label">{props.label}</div>
    </div>
  );
};

export default IncomeChartBar;
