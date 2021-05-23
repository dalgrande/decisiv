import React, { useState, useEffect } from "react";

import api from "../services/api";

export const PoliticiansContext = React.createContext({});

const PoliticiansProvider = ({ children }) => {
  const [politicianData, setPoliticianData] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [total, setTotal] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    session: "116",
    chamber: "senate",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPoliticianData() {
      setPoliticianData(null);
      setTotal(null);
      setLoading(true);

      try {
        const response = await api.get(
          `congress/v1/${filters.session}/${filters.chamber}/members.json`
        );

        const { results } = response.data;
        setTotal(results[0].num_results);
        const indexofLastData = currentPage * rowsPerPage;
        const indexofFirstData = indexofLastData - rowsPerPage;
        const currentData = results[0].members?.slice(
          indexofFirstData,
          indexofLastData
        );

        if (filters.name !== "") {
          const filteredData = results[0].members.filter(
            (item) =>
              item.first_name.toLowerCase() === `${filters.name}` ||
              item.first_name === `${filters.name}`
          );
          setTotal(filteredData.length);
          setPoliticianData(filteredData);
          setLoading(false);
        } else {
          setPoliticianData(currentData);
          setLoading(false);
        }
      } catch (error) {
        setTotal(0);
        setPoliticianData([]);
      }
    }

    loadPoliticianData();
  }, [filters, currentPage, rowsPerPage]);

  return (
    <PoliticiansContext.Provider
      value={{
        politicianData,
        total,
        currentPage,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage,
        filters,
        setFilters,
        loading,
        setLoading,
      }}
    >
      {children}
    </PoliticiansContext.Provider>
  );
};

export default PoliticiansProvider;
