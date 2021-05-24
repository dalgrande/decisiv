import React, { useState } from "react";
import classes from "./Card.module.css";
import DetailsCard from "../../UI/DetailsCard/DetaisCard";

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
    <div onClick={handleShowDetails} className={classes.Card}>
      <p>
        {last_name}, {first_name}
      </p>
      <p>Gender: {gender}</p>
      <p>Party: {party}</p>
      <p>State: {state}</p>
      <p>Next Election: {next_election}</p>
      <p>Twitter: {twitter_account}</p>
      <p>Facebook: {facebook_account}</p>
      <p>Youtube: {youtube_account}</p>
    </div>
  );
};

export default Card;
