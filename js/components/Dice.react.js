var React = require('react');
var DieSide = require('./DieSide.react');

var Dice = React.createClass({
	render: function(){
		var sides = [];
		for(var i=0; i<this.props.sides.length; i++){
			sides.push(
				<DieSide
					value={this.props.sides[i]}
					fromDie={this.props.diceIndex}
					selected={this.props.selected}
					selectHandler={this.props.selectHandler} />
			)
		}

		return (
			<div>
				<div className="die" ref="die" onChange={this.onSelection}>
					{ sides }
				</div>
			</div>
		)
	}
});

module.exports = Dice;
