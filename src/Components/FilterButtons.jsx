import React from "react";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="filter-btns">
      {["All", "Art", "Car", "City", "People", "Travel"].map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
          data-filter={filter}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
