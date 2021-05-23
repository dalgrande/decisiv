import React from "react";
import usePoliticians from "../../../hooks/usePoliticians";
import CardsPerPage from "./CardsPerPage/CardsPerPage";
import "./Pagination.module.css";

export default function Pagination() {
  const { total, rowsPerPage, setCurrentPage } = usePoliticians();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul>
          {pageNumbers.map((page) => (
            <li key={page}>
              <a onClick={() => setCurrentPage(page)}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <CardsPerPage />
    </>
  );
}
