import React, { useState, useEffect } from "react";

import api from "../services/api";

export const PoliticiansContext = React.createContext({});

const PoliticiansProvider = ({ children }) => {
  const [politicianData, setPoliticianData] = useState([{}]);
  const [responseData, setResponseData] = useState();
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

  const indexofLast = currentPage * rowsPerPage;
  const indexofFirst = indexofLast - rowsPerPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleFilterByGender() {
    if (responseData) {
      const filteredByGender = responseData.filter(
        (item) => item.gender === `${filters.gender}`
      );
      setTotal(filteredByGender.length);
      setPoliticianData(filteredByGender.slice(indexofFirst, indexofLast));
      setLoading(false);
    }
  }

  function handleFilterByParty() {
    if (responseData) {
      const filteredByParty = responseData.filter(
        (item) => item.party === `${filters.party}`
      );
      setTotal(filteredByParty.length);
      setPoliticianData(filteredByParty.slice(indexofFirst, indexofLast));
      setLoading(false);
      if (filters.gender !== "") {
        setPoliticianData(() => {
          let prev = responseData.filter(
            (item) =>
              item.gender === `${filters.gender}` &&
              item.party === `${filters.party}`
          );
          setTotal(prev.length);
          setPoliticianData(prev.slice(indexofFirst, indexofLast));
          return prev;
        });
        setLoading(false);
      }
    }
  }

  function handleFilteredByName() {
    const filteredByName = responseData.filter(
      (item) =>
        item.first_name.toLowerCase().includes(`${filters.firstName}`) ||
        item.first_name.includes(`${filters.firstName}`)
    );

    setTotal(filteredByName.length);
    setPoliticianData(filteredByName.slice(indexofFirst, indexofLast));
    setLoading(false);

    if (filters.party !== "") {
      setPoliticianData((prevState) => {
        let prev = prevState.filter(
          (item) => item.party === `${filters.party}`
        );
        setTotal(prev.length);
        return prev;
      });
      setLoading(false);
    }

    if (filters.gender !== "") {
      setPoliticianData((prevState) => {
        let prev = prevState.filter(
          (item) => item.gender === `${filters.gender}`
        );
        setTotal(prev.length);
        return prev;
      });
      setLoading(false);
    }
  }

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

        setResponseData(results[0].members);
        setTotal(results[0].num_results);
        setLoading(false);
        setPoliticianData(results[0].members.slice(indexofFirst, indexofLast));
        setCurrentPage(1);
      } catch (error) {
        setTotal(0);
        setPoliticianData([]);
      }
    }
    loadPoliticianData();
  }, [rowsPerPage, filters.chamber, filters.session]);

  useEffect(() => {
    function applyFilters() {
      filters.firstName !== "" ? handleFilteredByName() : null;

      filters.gender !== "" && filters.firstName === ""
        ? handleFilterByGender()
        : null;

      filters.party !== "" && filters.firstName === ""
        ? handleFilterByParty()
        : null;

      if (
        filters.party === "" &&
        filters.firstName === "" &&
        filters.gender === ""
      ) {
        setTotal(responseData?.length);
        setPoliticianData(responseData?.slice(indexofFirst, indexofLast));
      }
    }
    applyFilters();
  }, [filters.party, filters.firstName, filters.gender, total, currentPage]);

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
        pageNumbers,
      }}
    >
      {children}
    </PoliticiansContext.Provider>
  );
};

export default PoliticiansProvider;
