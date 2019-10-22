import React, { Component } from 'react';
import Card from './components/Card';
import Head from './components/Head';
import Wrapper from './components/Wrapper';
import characters from './cards.json';
import logo from './logo.svg';
import './App.css';

let correctGuesses = 0;
let topScore = 0;
let message = "See if you can click on a character only once!";

class App extends Component {

  // setting state to json array
  state = {
    characters,
    correctGuesses,
    topScore,
    message,
  };

  setClicked = id => {

    const characters = this.state.characters;

    // filter for card clicked on
    const choosenCard = characters.filter(match => match.id === id);

    if (choosenCard[0].clicked) {

      console.log("Correct Guesses: " + correctGuesses);
      console.log("Top Score: " + topScore);

      correctGuesses = 0;
      message = "You already chose that one!"

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ correctGuesses });
      this.setState({ characters });
      // 
    } else if (correctGuesses < 11) {

    }
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
