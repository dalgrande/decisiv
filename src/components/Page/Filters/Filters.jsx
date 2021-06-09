import React from "react";
import classes from "./Filters.module.css";

import SearchByName from "./SearchByName/SearchByName";
import ChamberSelect from "./ChamberSelect/ChamberSelect";
import SearchBySession from "./SearchBySession/SearchBySession";
import PartySelect from "./PartySelect/PartySelect";
import SearchByGender from "./SearchByGender/SearchByGender";
import { useParams } from "react-router";

export default function Filters() {
  let { gender, party, name, chamber, session } = useParams();
  return (
    <div className={classes.filterBox}>
      <SearchByGender gender={gender} />
      <PartySelect party={party} />
      <SearchByName name={name} />
      <ChamberSelect />
      <SearchBySession />
    </div>
  );
}
