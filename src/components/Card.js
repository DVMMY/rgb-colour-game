import React, { Component } from 'react';

class Card extends Component {
	constructor() {
		super();

		this.state = {
			hidden: false
		}
	}

	componentWillReceiveProps(nextProps) {
	    if (nextProps.card !== this.props.card || nextProps.correctColourChosen !== this.props.correctColourChosen) {
	      this.setState({ hidden: false });
	    }
	}

	checkCard = () => {
	  	const { correctRGB, card } = this.props;
	    if (correctRGB === card) {
	    	// correct colour chosen
	        this.props.correctChoice();
	    } else {
	    	// incorrect colour chosen, so hide card
	        this.setState({ hidden: true });
	    }
	}

	render() {
	  	const { card, correctColourChosen, correctRGB } = this.props;
	  	const cardColor = correctColourChosen ? correctRGB : card;
	  	const cardStyle = {
		  backgroundColor: 'rgb' + (cardColor),
		}
		let extraClass = this.state.hidden ? ' incorrect' : '';
		let cardStatus = correctColourChosen ? ' unselectable' : '';

	    return (
	      	<div className={`card${extraClass}${cardStatus}`} style={cardStyle} onClick={this.checkCard}>
			</div>
	    );
	}
}

export default Card;
