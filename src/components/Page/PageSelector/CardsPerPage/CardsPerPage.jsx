import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

function CardsPerPage() {
  const { setRowsPerPage } = usePoliticians();

  const handleCardsPerPageSelection = (e) => {
    e.preventDefault();
    setRowsPerPage(e.target.value);
  };
  return (
    <div>
      <select onChange={handleCardsPerPageSelection} name="cards" id="cards">
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="32">32</option>
        <option value="64">64</option>
      </select>
      <label htmlFor="cards"> Cards per page</label>
    </div>
  );
}
export default React.memo(CardsPerPage);
