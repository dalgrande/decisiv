import React from "react";
import "./PartySelect.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

function PartySelect() {
  const { setCurrentPage, setLoading, setFilters } = usePoliticians();

  const handleFilterByPartyChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    setFilters((prevState) => {
      return { ...prevState, party: e.target.value };
    });
  };

  return (
    <div>
      <label htmlFor="cards">Select the Party:</label>
      <select onChange={handleFilterByPartyChange} name="cards" id="cards">
        <option value="">All</option>
        <option value="D">Democrats</option>
        <option value="R">Republicans</option>
      </select>
    </div>
  );
}

export default React.memo(PartySelect);
