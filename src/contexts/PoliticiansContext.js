import React, { useState, useEffect } from "react";

import api from "../services/api";

export const PoliticiansContext = React.createContext({});

const PoliticiansProvider = ({ children }) => {
  const [politicianData, setPoliticianData] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [total, setTotal] = useState(null);
  const [filters, setFilters] = useState({
    firstName: "",
    session: "116",
    chamber: "senate",
    party: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPoliticianData() {
      setPoliticianData(null);
      setTotal(null);
      setLoading(!loading);

      try {
        const response = await api.get(
          `congress/v1/${filters.session}/${filters.chamber}/members.json`
        );
        const { results } = response.data;
        setTotal(results[0].num_results);
        const indexofLast = currentPage * rowsPerPage;
        const indexofFirst = indexofLast - rowsPerPage;
        const pageData = results[0].members?.slice(indexofFirst, indexofLast);

        if (filters.firstName !== "") {
          const filteredByName = results[0].members.filter(
            (item) =>
              item.first_name.toLowerCase().includes(`${filters.firstName}`) ||
              item.first_name.includes(`${filters.firstName}`)
          );
          setTotal(filteredByName.length);
          setPoliticianData(filteredByName.slice(indexofFirst, indexofLast));
          setLoading(false);
        } else if (filters.party !== "") {
          const filteredByParty = results[0].members.filter(
            (item) => item.party === `${filters.party}`
          );
          setTotal(filteredByParty.length);
          setPoliticianData(filteredByParty.slice(indexofFirst, indexofLast));
          setLoading(false);
        } else if (filters.party === "" && filters.firstName === "") {
          setPoliticianData(pageData);
        }

        setLoading(false);
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
