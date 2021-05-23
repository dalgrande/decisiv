import React from "react";
import "./ChamberSelect.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

export default function ChamberSelect() {
  const { setLoading, setChamber } = usePoliticians();

  const handleFilterByChamberChange = (e) => {
    setLoading(true);
    setChamber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="cards">Select the Chamber:</label>
      <select onChange={handleFilterByChamberChange} name="cards" id="cards">
        <option value="senate">Senate</option>
        <option value="house">House</option>
      </select>
    </div>
  );
}
