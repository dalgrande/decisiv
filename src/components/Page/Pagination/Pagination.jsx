import React from "react";
import usePoliticians from "../../../hooks/usePoliticians";
import CardsPerPage from "./CardsPerPage/CardsPerPage";
import "./Pagination.module.css";

export default function Pagination() {
  const { total, rowsPerPage, setCurrentPage, currentPage } = usePoliticians();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <nav>
        <ul>
          {pageNumbers.map((page) => (
            <li key={page} onClick={() => handleChangePage(page)}>
              {page === currentPage ? <p>{page}</p> : page}
            </li>
          ))}
        </ul>
      </nav>
      <CardsPerPage />
    </>
  );
}
