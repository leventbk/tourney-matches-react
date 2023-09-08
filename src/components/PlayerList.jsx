import React from "react"; //optional
import Player from "./Player";
import playerData from "../data/playerData";
import { preparePlayerData } from "../helpers/playerHelpers"


function PlayerList(props) {

  const allPlayers = preparePlayerData(playerData).map((player, gamerTag) => {
    return (
      <Player
        key={player.gamerTag}
        gamerTag={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins = {player.wins}
      />)
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {allPlayers}
    </section>
  );
}

export default PlayerList;