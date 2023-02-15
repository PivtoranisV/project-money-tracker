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
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;