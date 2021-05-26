import React from "react";
import usePoliticians from "../../../hooks/usePoliticians";
import classes from "./EmptyResults.module.css";

export default function EmptyResults() {
  const { filters } = usePoliticians();

  return (
    <div className={classes.view}>
      <div className={classes.hint}>
        <h3>
          Your search for the name - <span>{filters.firstName}</span> - did not
          match any Politician. In the{" "}
          {filters.chamber === "senate" ? "Senate" : "House"}, on the{" "}
          {filters.session} session.
        </h3>
      </div>
      <div>
        <li>
          <p>Make sure that all words are spelled correctly.</p>
        </li>
        <li>
          <p>Try different keywords.</p>{" "}
        </li>
        <li>
          <p>Try more general keywords.</p>{" "}
        </li>
      </div>
    </div>
  );
}
