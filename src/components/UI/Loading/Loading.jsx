import classes from "./Loading.module.css";
import React from "react";

export default function Loading() {
  return (
    <div className={classes.loadingBox}>
      <div className={classes.skChase}>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
      </div>
    </div>
  );
}
