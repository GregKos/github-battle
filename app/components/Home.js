/**
	*	A fairly straightforward Home component.
	*	Displays a homepage with information about the app and links for other components.
	*/

var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<div className='row'>
					<h1>GitHub Battle: Battle your friends...and stuff.</h1>
				</div>
				<div className='row bigSpacer'>
					<p>A simple SPA that can be a lot of fun!</p>
				</div>
				<div className='row bigSpacer'>
					<div className='column'>
						<p className="midSpacerInv">
							<h3>You can battle your friends!</h3>
							<p>Pit two GitHub users against each other. We calculate their scores and determine a winner.</p>
							<p><i>Our highly scientific formula is <em>(Followers * 3) + TotalStars</em>.</i></p>
						</p>
						<Link className='button' to='/battle'>Battle</Link>
					</div>
					<div className='column'>
						<p className="midSpacerInv">
							<h3>You can see what's popular!</h3>
							<p>See a ranking of the most popular repos on GitHub. You can see all repos or filter by language - from a select few.</p>
							<p><i>We carefully selected the available languages as we were told.</i></p>
						</p>
						<Link className='button' to='/popular'>Popular</Link>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Home;