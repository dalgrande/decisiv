import classes from "./SearchByName.module.css";
import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

export default function SearchByName() {
  const { filters, setFilters, setLoading } = usePoliticians();

  const handleFilterByNameChange = (e) => {
    e.preventDefault();
    setLoading(true);
    setFilters((prevState) => {
      return { ...prevState, first_name: e.target.value };
    });
  };

  return (
    <div className={classes.searchField}>
      Search by Name:{" "}
      <input
        type="text"
        placeholder=""
        value={filters.first_name}
        onChange={handleFilterByNameChange}
      />
    </div>
  );
}
