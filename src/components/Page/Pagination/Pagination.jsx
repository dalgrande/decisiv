import React from "react";
import usePoliticians from "../../../hooks/usePoliticians";
import CardsPerPage from "./CardsPerPage/CardsPerPage";
import "./Pagination.module.css";

export default function Pagination() {
  const { total, rowsPerPage, setCurrentPage, setLoading } = usePoliticians();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleChangePage = (page) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(page);
  };

  return (
    <>
      <nav>
        <ul>
          {pageNumbers.map((page) => (
            <li key={page}>
              <a onClick={() => handleChangePage(page)}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <CardsPerPage />
    </>
  );
}
