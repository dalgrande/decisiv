import React, { useState } from "react";
import classes from "./Card.module.css";
import DetailsCard from "../../UI/DetailsCard/DetaisCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const {
    first_name,
    last_name,
    gender,
    twitter_account,
    facebook_account,
    youtube_account,
    party,
    state,
    next_election,
    api_uri,
  } = props.politician;

  const [detail, setDetail] = useState(false);

  const handleShowDetails = () => {
    setDetail(!detail);
  };

  return detail ? (
    <>
      <DetailsCard api_uri={api_uri} onToggle={handleShowDetails} />
    </>
  ) : (
    <>
      <div onClick={handleShowDetails} className={classes.card}>
        <p>
          {last_name}, {first_name}
        </p>
        {gender === "F" ? (
          <FontAwesomeIcon icon={faFemale} className={classes.icon} />
        ) : (
          <FontAwesomeIcon icon={faMale} className={classes.icon} />
        )}
        <p>Party: {party}</p>
        <p>State: {state}</p>
        <p>Next Election: {next_election}</p>
        <p>Twitter: {twitter_account}</p>
        <p>Facebook: {facebook_account}</p>
        <p>Youtube: {youtube_account}</p>
      </div>
    </>
  );
};

export default Card;
