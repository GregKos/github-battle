/**
	*	Simple navbar component
	*	Displays a navigation bar at the top left corner of the page.
	*	List is style: none, so they appear as simple links.
	*/

var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
	return (
		 <ul className='nav'>
		 	<li>
		 		<NavLink exact activeClassName='active' to='/'>
		 			Home
		 		</NavLink>
		 	</li>
		 	<li>
		 		<NavLink activeClassName='active' to='/battle'>
		 			Battle
		 		</NavLink>
		 	</li>
		 	<li>
		 		<NavLink activeClassName='active' to='/popular'>
		 			Popular
		 		</NavLink>
		 	</li>
		 </ul>
	)
}

module.exports = Nav;