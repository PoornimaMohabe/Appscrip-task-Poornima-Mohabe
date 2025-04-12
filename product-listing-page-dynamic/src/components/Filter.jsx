import React, { useState } from 'react';

const Filter = () => {
  const [openCategory, setOpenCategory] = useState({
    'IDEAL FOR': true,
    'OCCASION': false,
    'WORK': false,
    'FABRIC': false,
    'SEGMENT': false,
    'SUITABLE FOR': false,
    'RAW MATERIALS': false,
    'PATTERN': false,
  });

  const categoriesWithSubOptions = {
    'IDEAL FOR': ['Men', 'Women', 'Baby & Kids'],
    'OCCASION': ['Casual', 'Festive', 'Formal'],
    'WORK': ['Office', 'Freelance'],
    'FABRIC': ['Cotton', 'Silk', 'Wool'],
    'SEGMENT': ['Premium', 'Mid-range'],
    'SUITABLE FOR': ['Summer', 'Winter'],
    'RAW MATERIALS': ['Organic', 'Synthetic'],
    'PATTERN': ['Solid', 'Printed']
  };

  const toggleCategory = (title) => {
    setOpenCategory(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="Filter_Component">
      <div className="filter-item">
        <label><input type="checkbox" /> CUSTOMIZBLE</label>
      </div>

      {Object.entries(categoriesWithSubOptions).map(([title, subOptions], i) => (
        <div className="filter-category" key={i}>
          <div className="filter-header" onClick={() => toggleCategory(title)}>
            <span className="filter-title">{title}</span>
            <span className="dropdown-icon">{openCategory[title] ? '⌄' : '^'}</span>
          </div>

          <p className="filter-option">All</p>

          {openCategory[title] && (
            <>
              <a className="filter-option">Unselect all</a>
              {subOptions.map((opt, idx) => (
                <div className="filer-subcategories" key={idx}>
                  <input type="checkbox" />
                  <p className="filter-option">{opt}</p>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
