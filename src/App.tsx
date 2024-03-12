import React from 'react';
import './App.css';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
  location: string; // Add location property
}

class App extends React.Component {
  state = {
    teams: [] as Team[],
  };

  async componentDidMount() {
    try {
      const response = await fetch('./CollegeBasketballTeams.json');
      const data = await response.json();
      const teams = data.teams.map((team: any) => ({
        ...team,
        location: `${team.city}, ${team.state}`,
      }));
      this.setState({ teams });
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>March Madness Teams</h1>
        <ul>
          {this.state.teams.map((team, index) => (
            <li key={index}>
              <h2>{team.name}</h2>
              <p>
                {team.school} - {team.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
