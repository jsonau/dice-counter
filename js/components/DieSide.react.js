var React = require('react');

var DieSide = React.createClass({
	shouldComponentUpdate: function(nextProps) {
  		return nextProps.selected != this.props.selected && // must have different selection than before
  			(
  				this.props.value == this.props.selected || // was selected 
  				this.props.value == nextProps.selected // now selected
  			)
  		;
	},

	handleClick: function() {
		this.props.selectHandler(this.props.fromDie, this.props.value);
	},

	render: function(){
		var className = this.props.selected == this.props.value ? 'side selected' : 'side';
		return(
			<div className={className} onClick={this.handleClick}>{this.props.value}</div>
		)
	}
});

module.exports = DieSide;
