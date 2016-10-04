var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App.scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>App ready</div>,
	document.getElementById('app')
);
