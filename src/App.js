import './App.css';
import React from 'react';
import MatchList from './components/MatchList'; 
import PlayerList from './components/PlayerList';
import playerData from './data/playerData';
import matchData from "./data/matchData";
import {preparePlayerData, addWinsToPlayer} from "./helpers/playerHelpers"

function App() {
  
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData); //

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments Found their Match!</span></h1>
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
