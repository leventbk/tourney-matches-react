import './App.css';
import React from 'react';
import MatchList from './components/MatchList'; 
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments Found their Match!</span></h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
