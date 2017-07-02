/**
	*	A component for styling user appearance.
	*	Displays the avatar and username for a given user.
	* Allows for any extra data as props.children
	*/

var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview(props) {
	return (
		<div>
			<div className='column'>
				<img
					className='avatar'
					src={props.avatar}
					alt={'Avatar for ' + props.username}
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			{props.children}
		</div>
	);
}

PlayerPreview.propTypes = {
	username: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired
}

module.exports = PlayerPreview;