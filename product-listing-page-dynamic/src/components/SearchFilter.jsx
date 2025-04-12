import React, { useState } from "react";

const SearchFilter = ({ toggleFilter, showFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="Search_Section">
      <div className="total_Items_data">3425 ITEMS</div>

      <button className="Filter_Text" onClick={toggleFilter}>
        {showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}
      </button>

      <div className="dropdown">
        <div className="dropdown-selected" onClick={toggleDropdown}>
          RECOMMENDED
        </div>
        <div className={`dropdown-options ${dropdownOpen ? "" : "hidden"}`}>
          <div className="option active">RECOMMENDED</div>
          <div className="option">NEWEST FIRST</div>
          <div className="option">POPULAR</div>
          <div className="option">PRICE : HIGH TO LOW</div>
          <div className="option">PRICE : LOW TO HIGH</div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;