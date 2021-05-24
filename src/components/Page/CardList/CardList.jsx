import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import usePoliticians from "../../../hooks/usePoliticians";
import classes from "./CardList.module.css";
import Loading from "../../UI/Loading/Loading";
import EmptyResults from "../../UI/EmptyResults/EmptyResults";

const CardList = () => {
  const { politicianData, total } = usePoliticians();

  if (!politicianData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div key={Math.random()} className={classes.list}>
      {total <= 0 ? (
        <div className={classes.noresults}>
          <EmptyResults />
          <Loading />
        </div>
      ) : (
        politicianData.map((politician) => (
          <Card key={politician.id + Math.random()} politician={politician} />
        ))
      )}
    </div>
  );
};

export default CardList;
