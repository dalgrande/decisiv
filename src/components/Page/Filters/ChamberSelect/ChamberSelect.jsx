import React from "react";
import "./ChamberSelect.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

function ChamberSelect() {
  const { setLoading, setFilters, filters } = usePoliticians();

  const handleFilterByChamberChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setFilters((prevState) => {
      return { ...prevState, chamber: e.target.value };
    });
  };

  return (
    <div>
      <label htmlFor="cards">Select the Chamber:</label>
      <select
        value={filters.chamber}
        onChange={handleFilterByChamberChange}
        name="cards"
        id="cards"
      >
        <option value="senate">Senate</option>
        <option value="house">House</option>
      </select>
    </div>
  );
}

export default ChamberSelect;
