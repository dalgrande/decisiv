import React from "react";
import classes from "./Card.module.css";

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
  } = props.politician;
  return (
    <div className={classes.Card}>
      <p>
        {first_name} {last_name}
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
