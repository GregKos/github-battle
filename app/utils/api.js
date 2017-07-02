/**
	*	The GitHub API functions.
	*	Utilizes their API to gather data, parse them, and return required information.
	*	Exports two functions with the actual data the app needs.
	*	KNOWN ISSUE: exposed GitHub ClientID and Secret...
	*/

var axios = require('axios');

// Specify ClientID and Secret to avoid API request limitations
var id = "c92050a55a3800d60ee5";
var sec = "6d75b5cc9762a5d762fc5223f2153c03d721f1f1";
var params = "?client_id=" + id + "&client_secret=" + sec;

// Function to fetch profile data for a specific username
function getProfile(username) {
	return axios.get('https://api.github.com/users/' + username + params)
		.then(function (user) {
			return user.data;
		});
}

// Function to fetch Repos of a specific username
function getRepos(username) {
	return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

// Function that parses Repos and adds all stargazers
function getStarCount(repos) {
	return repos.data.reduce(function (count, repo) {
		return count + repo.stargazers_count;
	}, 0);
}

// Function that calculates the total score based on fetched profile and repos
function calculateScore(profile, repos) {
	var followers = profile.followers;
	var totalStars = getStarCount(repos);
	return (followers * 3) + totalStars;
}

// Basic error handling
function handleError(error) {
	console.warn(error);
	return null;
}

// Function that combines previous functions for profile data, repos, stargazers, calculating
// Returns an object with the profile of the user and his final score
function getUserData(player) {
	return axios.all([
			getProfile(player),
			getRepos(player)
		]).then(function (data) {
			var profile = data[0];
			var repos = data[1];
			return {
				profile: profile,
				score: calculateScore(profile, repos)
			}
		});
}

// Function to store players in the array based on who has the heighest score
// Basically places the winner at first place and the loser at second
// Makes proper display on Results component easier
function sortPlayers(players) {
	return players.sort(function(a,b) {
		return b.score - a.score;
	})
}

// Exports two modules
module.exports = {
	// Function that receives two usernames, gathers relevant info, calculates score, sorts winner first
	battle: function (players) {
		return axios.all(players.map(getUserData))
			.then(sortPlayers)
			.catch(handleError);
	},
	// Function that fetches all popular repos to populate lists on Popular component
	fetchPopularRepos: function (language) {
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
		return axios.get(encodedURI).then(function (response) {
			return response.data.items;
		})
	}
}