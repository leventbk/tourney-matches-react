import React from "react"; //optional

function Player(props) {
  return (
    <article className="Player">
      <h1>
        {props.firstName} <span>Secret</span> {props.lastName}
        {props.gamerTag} </h1>
      <h2 className="zero">Currently at no win </h2>
      <h2>Currently at 1 wins</h2>


      <h2>Currently at {props.wins} wins</h2>
    </article>
  );
}

export default Player;