import React from 'react';
import Match from './Match';

function MatchList() {
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {MatchList.map((match) => (
        <Match
          key={match.id}
          name={match.name}
          wins={match.wins}
        />
      ))}
    </section>
  )
}

export default MatchList;