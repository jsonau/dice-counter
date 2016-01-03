var React = require('react');

var Stats = React.createClass({
	render:function(){
		var rolls = this.props.history.rolls;
		// heading
		var heading_tds = [<td>Dice</td>];
		for (var key in rolls[0]){
			heading_tds.push(<td>{key}</td>)
		}
		var heading = <tr>{ heading_tds }</tr>;

		// rows
		var rows = [];
		for(var i=0; i<rolls.length; i++){
			var row_tds = [<td>{i+1}</td>];
			for (var key in rolls[i]){
				row_tds.push(<td>{ rolls[i][key] }</td>)
			}
			rows.push(<tr>{ row_tds }</tr>);
		}

		return (
			<table>
			<tbody>
				{heading}
				{rows}
				</tbody>
			</table>
		)
	}

});


module.exports = Stats;