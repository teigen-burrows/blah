import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamNames: TeamProps[] = teamData.teams;

function TeamList() {
  return (
    <div className="TeamList">
      {teamNames.map(function (teamNum) {
        return <Team {...teamNum} key={teamNum.tid} />;
      })}
    </div>
  );
}

function Welcome() {
  return (
    <div className="Welcome">
      <h1>March Madness College Basketball</h1>
      <h2>Check out these stellar teams!</h2>
    </div>
  );
}

function Team(props: TeamProps) {
  const { school, name, city, state } = props;
  return (
    <div className="Team">
      <h3>
        {school} {name}
      </h3>
      <h4>
        {city}, {state}
      </h4>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
