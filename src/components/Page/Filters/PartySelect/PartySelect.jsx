import React from "react";
import "./PartySelect.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

export default function PartySelect() {
  const { setLoading, setFilters } = usePoliticians();

  const handleFilterByPartyChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setFilters((prevState) => {
      return { ...prevState, party: e.target.value };
    });
  };

  return (
    <div>
      <label htmlFor="cards">Select the Party:</label>
      <select onChange={handleFilterByPartyChange} name="cards" id="cards">
        <option value="" />
        <option value="D">Democrats</option>
        <option value="R">Republicans</option>
      </select>
    </div>
  );
}
