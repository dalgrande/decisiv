import React from "react";
import "./SearchByGender.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

function SearchByGender() {
  const { setCurrentPage, setLoading, setFilters, filters } = usePoliticians();

  const handleFilterByGender = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    setFilters((prevState) => {
      return { ...prevState, gender: e.target.value };
    });
  };

  return (
    <div>
      <label htmlFor="cards">Gender:</label>
      <select
        value={filters.gender}
        onChange={handleFilterByGender}
        name="cards"
        id="cards"
      >
        <option value="">All</option>
        <option value="F">Woman</option>
        <option value="M">Men</option>
      </select>
    </div>
  );
}

export default React.memo(SearchByGender);
