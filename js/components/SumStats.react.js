var React = require('react');

var SumStats = React.createClass({
	render:function(){
		// heading
		var heading_tds = [<td>Sum</td>];
		var count_tds = [<td>Count</td>];
		for (var key in this.props.data){
			heading_tds.push(<td>{key}</td>);
			count_tds.push(<td>{this.props.data[key]}</td>)
		}


		return (
			<table>
			<tbody>
				<tr>
					{heading_tds}
				</tr>
				<tr>
					{count_tds}
				</tr>
				</tbody>
			</table>
		)
	}

});


module.exports = SumStats;