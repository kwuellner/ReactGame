import React, { Component } from 'react';
import Cards from './components/Cards';
import Head from './components/Head';
import Wrapper from './components/Wrapper';
import characters from './cards.json';
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
    const chosenCard = characters.filter(character => character.id === id);

    if (chosenCard[0].clicked) {

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

      // set value to true
      chosenCard[0].clicked = true;

      // counter
      correctGuesses++;

      message = "Good Guess! Keep guessing!"

      if (correctGuesses > topScore) {

        topScore = correctGuesses;
        this.setState({ topScore })
      }

      // randomize the card order
      characters.sort(function (a, b) { return 0.5 - Math.random() });

      // sets this.state equal to new array
      this.setState({ characters });
      this.setState({ correctGuesses });
      this.setState({ message });

    } else {

      // set value to true
      chosenCard[0].clicked = true;

      // restart counter
      correctGuesses = 0;

      message = "Good Job! See if you can do it again!"
      topScore = 12;
      this.setState({ topScore });

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      // shuffle rendering for character array
      characters.sort(function (a, b) { return 0.5 - Math.random() });

      // set this.state to match new array
      this.setState({ characters });
      this.setState({ correctGuesses })
      this.setState({ message });
    }
  };

  render() {
    return (
      <Wrapper>
        <Head>Super Mario Bros Game</Head>

        <h3 className="scoreSummary">
          {this.state.message}
        </h3>

        <h3 className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses}
          <br />
          Top Score: {this.state.topScore}
        </h3>
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Cards
                setClicked={this.setClicked}
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };
};

export default App;
