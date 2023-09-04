import React from "react"; //optional
import Player from "./Player";

import matchData from "../data/matchData";
import playerData from "../data/playerData";
import {preparePlayerData, addWinsToPlayer} from "../helpers/playerHelpers"

//PlayerList will need to create an array of Player data/components and output it.
function PlayerList() {
  const playerDataArray = preparePlayerData(playerData);
  console.log(playerDataArray);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData); //this is the data we want to use to create the Player components
  console.log(parsedPlayerData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;