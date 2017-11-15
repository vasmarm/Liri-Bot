
// Twitter



if(process.argv[2] === "my-tweet"){
	var Twitter = require('twitter');

	var client = new Twitter ({
	  consumer_key: '884xwYi4B50QZHopXXwaQ7bIC',
	  consumer_secret: 'Db9xLKXRIt81BpgCcdRf6tj1wmebX0ZpziXS7K8PetOx9Tvvyp',
	  access_token_key: '114762424-xXUwuusswYsb3P3SJ5deTe5Qen1rMRmmkb8nPeNv',
	  access_token_secret: 'UCdO9Xt7O9vI41RaJ4uuXJGJos9rdpnB99sLEYWN2uzYe'
	});

	module.exports = client;
}
else if(process.argv[2] === "spotify-this-song" || process.argv[2] === "do-what-it-says"){
	var Spotify = require('node-spotify-api');

	var spotify = new Spotify({
	  id: '84967269463c4fd0b917c988a27fcf85',
	  secret: 'efa38f51bf274288984f6f45f4f02a6a'
	});

	module.exports = spotify;
}

// Spotify



// OMDBI