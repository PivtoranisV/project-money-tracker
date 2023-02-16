import React from 'react';
import './YearFilter.css';

const YearFilter = (props) => {
  const filterHandler = (event) => {
    props.onYearFilter(event.target.value);
  };

  return (
    <div className="year-filter">
      <div className="year-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
