import React from "react";
import "./SearchByGender.modules.css";
import usePoliticians from "../../../../hooks/usePoliticians";

function SearchByGender({ gender }) {
  const { setCurrentPage, setLoading, setFilters, filters } = usePoliticians();

  React.useEffect(() => {
    if (gender !== "all") {
      setFilters((prevState) => {
        return { ...prevState, gender: gender };
      });
    }
    if (gender === "all") {
      setFilters((prevState) => {
        return { ...prevState, gender: "" };
      });
    }
  }, []);

  const handleFilterByGender = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1);

    setFilters((prevState) => {
      return { ...prevState, gender: e.target.value };
    });
  };

  console.log(gender);
  console.log(filters);

  return (
    <div>
      <label htmlFor="cards">Gender:</label>
      <select
        value={filters.gender}
        onChange={handleFilterByGender}
        name="cards"
        id="cards"
      >
        <option value="">All</option>
        <option value="F">Woman</option>
        <option value="M">Men</option>
      </select>
    </div>
  );
}

export default React.memo(SearchByGender);
