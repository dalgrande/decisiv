import classes from "./SearchByName.module.css";
import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

function SearchByName() {
  const { setCurrentPage, filters, setFilters, setLoading } = usePoliticians();

  const handleFilterByNameChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    setFilters((prevState) => {
      return { ...prevState, firstName: e.target.value };
    });
  };

  return (
    <div className={classes.searchField}>
      Search by first name:{" "}
      <input
        type="text"
        placeholder=""
        value={filters.firstName}
        onChange={handleFilterByNameChange}
      />
    </div>
  );
}
export default React.memo(SearchByName);
