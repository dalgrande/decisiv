import classes from "./DetailsCard.module.css";
import React from "react";

export default function DetailCard({ api_uri, onToggle }) {
  return (
    <div className={classes.details} onClick={onToggle}>
      <p>This is the Detail Card</p>
      <p>{api_uri}</p>
    </div>
  );
}
