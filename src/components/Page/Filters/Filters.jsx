import React from "react";
import classes from "./Filters.module.css";
import usePoliticians from "../../../hooks/usePoliticians";
import SearchByName from "./SearchByName/SearchByName";
import ChamberSelect from "./ChamberSelect/ChamberSelect";
import SearchBySession from "./SearchBySession/SearchBySession";
import PartySelect from "./PartySelect/PartySelect";
import SearchByGender from "./SearchByGender/SearchByGender";

export default function Filters() {
  return (
    <div className={classes.filterBox}>
      <SearchByGender />
      <PartySelect />
      <SearchByName />
      <ChamberSelect />
      <SearchBySession />
    </div>
  );
}
