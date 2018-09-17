import React, { Component } from 'react';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      correctRGB: '',
      cards: []
    }
  }

  componentDidMount() {
    this.newGame();
  }

  generateColour = () => {
    // generate a single colour
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colour = '(' + r + ',' + g + ',' + b + ')';
    return colour;
  }

  newGame = () => {
    // generate random number from 1 - 6
    let randomNumber = Math.floor(Math.random() * 6);
    // generate 6 new colours
    let newCards = [];
    for(let i = 0; i < 6; i++) {
      let newColour = this.generateColour();
      newCards.push(newColour);
    }
    // selecting a random colour from the 6 generated above
    let mainColour = newCards[randomNumber];
    this.setState({
      correctRGB: mainColour,
      cards: newCards
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">RGB{this.state.correctRGB}</h1>
        </header>
        <div className="post-header">
          <span className="new-game" onClick={this.newGame}>New Game?</span>
        </div>
        <Cards cards={this.state.cards} correctRGB={this.state.correctRGB} />
      </div>
    );
  }
}

export default App;
