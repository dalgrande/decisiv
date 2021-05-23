import classes from "./SearchBySession.module.css";
import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

export default function SearchBySession() {
  const { filters, setFilters, setLoading } = usePoliticians();

  const handleFilterByNameChange = (e) => {
    e.preventDefault();
    setLoading(true);
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