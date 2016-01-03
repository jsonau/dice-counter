var React = require('react');
var ReactDom = require('react-dom');

var DiceCounterApp = require('./components/DiceCounterApp.react');

ReactDom.render(
  <DiceCounterApp diceCount={2} sideValues={[1,2,3,4,5,6]} />,
  document.getElementById('dicecountingapp')
);
