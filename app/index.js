var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

/* Run react on the div with app id in the main page */
ReactDOM.render(
	<App />,
	document.getElementById('app')
);