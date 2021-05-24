import classes from "./SearchByName.module.css";
import React from "react";
import usePoliticians from "../../../../hooks/usePoliticians";

export default function SearchByName() {
  const { filters, setFilters, setLoading } = usePoliticians();

  const handleFilterByNameChange = (e) => {
    e.preventDefault();
    setLoading(true);
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
