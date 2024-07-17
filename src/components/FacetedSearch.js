import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const FacetedSearch = ({ filters, onFilterChange, filterIcon }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="faceted-search">
      <div className="filters-header">
        <h2>
          <FontAwesomeIcon icon={filterIcon} className="filter-icon" />
        </h2>
      </div>
      <div>
        <label>
          Program:
          <select name="category" value={filters.category} onChange={handleChange}>
            <option value="">All</option>
            <option value="Power Skating">Power Skating</option>
            <option value="Stickhandling Mastery">Stickhandling Mastery</option>
            <option value="Defensive Strategies">Defensive Strategies</option>
            <option value="Goalie Training">Goalie Training</option>
            <option value="Shooting Accuracy">Shooting Accuracy</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <select name="priceRange" value={filters.priceRange} onChange={handleChange}>
            <option value="">All</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-130">$101 - $130</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FacetedSearch;
