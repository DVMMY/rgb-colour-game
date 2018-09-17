import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      correctColourChosen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.props.cards) {
      this.setState({ correctColourChosen: false });
    }
  }

  correctChoice = () => {
    // set all card colours to that of the correct colour
    this.setState({ correctColourChosen: true });
  }

  render() {
    let { cards } = this.props;

    return (
      <div className="board">
        <div className="cards">
          { cards.map((card, index) => {
            return <Card key={index} card={card} correctColourChosen={this.state.correctColourChosen} correctChoice={this.correctChoice} correctRGB={this.props.correctRGB} />
          }) }
        </div>
      </div>
    );
  }
}

export default Cards;
