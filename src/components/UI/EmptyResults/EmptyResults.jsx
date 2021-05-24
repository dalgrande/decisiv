import React from "react";
import usePoliticians from "../../../hooks/usePoliticians";
import classes from "./EmptyResults.module.css";

export default function EmptyResults() {
  const { filters } = usePoliticians();
  return (
    <div className={classes.view}>
      <p className={classes.searchHint}>
        Your search - <span>{filters.firstName}</span> - did not match any
        documents.
      </p>
      <ul>
        <li>
          <p>Make sure that all words are spelled correctly.</p>
        </li>
        <li>
          <p>Try different keywords.</p>{" "}
        </li>
        <li>
          <p>Try more general keywords.</p>{" "}
        </li>
      </ul>
    </div>
  );
}
