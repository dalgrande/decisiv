import classes from "./SearchBySession.module.css";
import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

function SearchBySession() {
  const { setCurrentPage, filters, setFilters, setLoading } = usePoliticians();

  const handleFilterByNameChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    setFilters((prevState) => {
      return { ...prevState, session: e.target.value };
    });
  };
  return (
    <div className={classes.searchField}>
      Search by Session:{" "}
      <input
        type="text"
        placeholder=""
        value={filters.session}
        onChange={handleFilterByNameChange}
      />
    </div>
  );
}

export default React.memo(SearchBySession);
