var React = require('react');
var Dice = require('./Dice.react');
var Stats = require('./Stats.react');
var SumStats = require('./SumStats.react');
var _ = require('underscore');


var DiceCounter = React.createClass({
	getInitialState: function(){
		var initialHistory = {
			rolls: [],
			sums: []
		};
		var initialChosenValues = [];
		for(i=0; i<this.props.diceCount; i++){
			initialChosenValues.push(0);

			var initialDieHistory = {};
			for(s=0; s<this.props.sideValues.length; s++){
				initialDieHistory[ ""+this.props.sideValues[s] ] = 0; 
			}
			initialHistory.rolls.push(initialDieHistory);
		}


		for(var i = this.props.sideValues[0]*2; i<=this.props.sideValues[ this.props.sideValues.length-1]*2; i++){
			initialHistory.sums[i] = 0;
		}

		return {
			counts:       this.props.diceCount,
			chosen_value: initialChosenValues,
			history: initialHistory
		}
	},

	render: function(){
		var dices = [];
		for(var i=0; i<this.state.counts; i++){
			var chosen = this.state.chosen_value[i]
			dices.push(
				<Dice
				key={i}
				diceIndex={i}
				sides={this.props.sideValues}
				selected={ chosen }
				selectHandler={this.setDiceValue} />
			);
		}

		return (
			<div>
				{ dices }
				
				<div className="button" onClick={this.log}>Ok</div> 

				<Stats history={this.state.history} />
				<SumStats data={this.state.history.sums} />

			</div>
		)
	},

	setDiceValue: function(index, value){
		var updated_chosen_value = _.clone(this.state.chosen_value)
		updated_chosen_value[index] = value;
		this.setState({
			chosen_value: updated_chosen_value
		})
	},

	resetDiceValue: function(){
		var new_chosen_values = _.clone(this.state.chosen_value)
		for(var i=0; i<this.state.chosen_value.length; i++){
			new_chosen_values[i] = 0;
		}

		this.setState({
			chosen_value: new_chosen_values
		})
	},

	log: function(){
		// no log unless all is set
		for(var i=0; i<this.state.chosen_value.length; i++){
			if (this.state.chosen_value[i] == 0) return;
		}

		var newHistory = _.clone(this.state.history);

		for(var i=0; i<this.state.chosen_value.length; i++){
			newHistory.rolls[i][ this.state.chosen_value[i] ] ++;
		}
		
		var sum = 0;
		for(var i=0; i<this.state.chosen_value.length; i++){
			sum += this.state.chosen_value[i];
		}
		newHistory.sums[sum]++;


		this.setState({
			history: newHistory
		}) 
		this.resetDiceValue();
	}
});


module.exports = DiceCounter;
