// Getting Keys which has twitter, spotify and OMDBI keys
var key = require("./keys.js");

// Checking for Tweet feature
// getting the in user's input and comparnig to my-tweet
if(process.argv[2] === "my-tweet"){
 
 	// Calling the function myTweets()
	myTweets();
}

// Spotify
// Using Spoitify in case user enters spotify-this-song
else if(process.argv[2] === "spotify-this-song"){

	// if user does not enter anything then by default we pass the song 
	//  "The Sign" by Ace of Base whose id is 3DYVWvPh3kGwPasp7yjahc
	if (process.argv[3] == undefined) {
			key.request('https://api.spotify.com/v1/tracks/3DYVWvPh3kGwPasp7yjahc').then(function(data) {
				
				// Print out the information of the track "The Sign" by Ace of Base whose
				console.log(
					
					"\n" + "Song #1" + ": " + data.name +
					"\n" + "Artists: " + data.album.artists[0].name +
					"\n" + "Album: " + data.album.name + 
					"\n" + "Preview: " + data.preview_url
				);

				// Catching the error in case there is one
			}).catch(function(err) {
				console.error('Error occurred: ' + err); 
			});
		} 

	// Else part carries if user enters the track name and it is passed in the search
	else {
		key.search({
			type: 'track',
			query: "'" + process.argv[3] + "'",
			limit: 5
		}, 
				function(err, data) {	

					// Stored to saved space in for loop
					var obj = data.tracks.items

					// If we have a length of data which is being returned to us
					if (obj.length != 0) {
						if (!err) {
							
							// Printing the initial information only once
							console.log("\nStarting data collection...");
							console.log("\nPrinting songs...\n");
							console.log("*********************");

							// Loop through each object (song) and print specific info
							for (i=0; i<obj.length && i <=5; i++) {
								console.log(
									// data.tracks.items[i].audio.id + 
									"\n" + "Song #" + (parseInt([i])+1) + ": " + obj[i].name + 
									"\n" + "Artists: " + JSON.stringify(obj[i].artists[0].name) + 
									"\n" + "Album: " + obj[i].album.name +
									"\n" + "Preview: " + obj[i].preview_url
								);
							};
							console.log("\n********************");
							
						  // Incase there is an error it will be prinited out
						} else {
							return console.log('Spotify error occurred: ' + err);
					   }
					}
			})
		}
}

// OMDB API
else if(process.argv[2] === "movie-this"){

	// npm used
	var request = require('request');

	// if user provides title name to search, search it
	if (process.argv[3] != undefined) {

		// API query parameter
		var queryUrl = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&apikey=40e9cece";

		// API call
		request(queryUrl, function (error, response, body) {

			// if API returns
			if (!error) {

				// return:  title + year + country+ language + plot + actors
				console.log("\n==================================");
				printMovie(error, response, body);
				console.log("\n==================================");

			// error condition	
			} else {
				console.log('OMDB error:', error);
				console.log('statusCode:', response && response.statusCode); 
			}

		});

	// if no title provided by user (blank): return default movie
	} else {

		// API call to specific movie
		request("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece", function (error, response, body) {
			
			// if return without error
			if (!error) {

				// return:  title + year + country+ language + plot + actors
				console.log("\n==================================");
				printMovie(error, response, body);
				console.log("\n==================================");

			// error condition
			} else {
				console.log('OMDB error:', error);
				console.log('statusCode:', response && response.statusCode); 
			}

		});
	}
}

// using Random.txt to read the command in the file using File Stream
else if (process.argv[2] === "do-what-it-says") {

	// npm used
	var fs = require("fs");

	// extract text from .txt file
	fs.readFile("random.txt", "utf8", function(error, data) {

		// error response 
		if (error) {
			return console.log(error);

		// response without error
		} else {

			// key used
			var key = require("./keys.js");

			// split text to get multiple arguments
			var textSplit = data.split(",")

			// API call with argument in .txt file
			key.search({type: 'track', query: textSplit[1]}, function(err,data) {

				// return:  song name + artists + album + preview URL
				// if user does not enter anything then by default we pass the song 
	//  "The Sign" by Ace of Base whose id is 3DYVWvPh3kGwPasp7yjahc
	if (process.argv[3] == undefined) {
			key.request('https://api.spotify.com/v1/tracks/3DYVWvPh3kGwPasp7yjahc').then(function(data) {
				
				// Print out the information of the track "The Sign" by Ace of Base whose
				console.log(
					
					"\n" + "Song #1" + ": " + data.name +
					"\n" + "Artists: " + data.album.artists[0].name +
					"\n" + "Album: " + data.album.name + 
					"\n" + "Preview: " + data.preview_url
				);

				// Catching the error in case there is one
			}).catch(function(err) {
				console.error('Error occurred: ' + err); 
			});
		} 

	// Else part carries if user enters the track name and it is passed in the search
	else {
		key.search({
			type: 'track',
			query: "'" + process.argv[3] + "'",
			limit: 5
		}, 
				function(err, data) {	

					// Stored to saved space in for loop
					var obj = data.tracks.items

					// If we have a length of data which is being returned to us
					if (obj.length != 0) {
						if (!err) {
							
							// Printing the initial information only once
							console.log("\nStarting data collection...");
							console.log("\nPrinting songs...\n");
							console.log("*********************");

							// Loop through each object (song) and print specific info
							for (i=0; i<obj.length && i <=5; i++) {
								console.log(
									// data.tracks.items[i].audio.id + 
									"\n" + "Song #" + (parseInt([i])+1) + ": " + obj[i].name + 
									"\n" + "Artists: " + JSON.stringify(obj[i].artists[0].name) + 
									"\n" + "Album: " + obj[i].album.name +
									"\n" + "Preview: " + obj[i].preview_url
								);
							};
							console.log("\n********************");
							
						  // Incase there is an error it will be prinited out
						} else {
							return console.log('Spotify error occurred: ' + err);
					   }
					}
			})
		}

			})

		}
	})
}

// myTweets Function
function myTweets(){

	var key = require("./keys.js"); 
	// Passing the screen name 
	var params = {screen_name: 'sharmavashisth'};

	// Using the get method & passing the key and getting the response
	key.get('statuses/user_timeline', params, function(error, tweets, response) {
	  
	  // If there is no error tweets will be printed
	  if (!error) {
	
		// Printing Starting Line so that it looks distinct on the terminal
		console.log("\nPrinting tweets...\n");
		console.log("**********************");

		// Checking the length of Tweets object and making sure not more than
		//  20 tweets are displayed using the for loop
	  	for(var i=0; i<tweets.length && i<20; i++){
	    	
	    	// Printing relevant information and tweets by 
	    	//  accessing the exact property of the JSON tweets object
	    	console.log(
	    		"-----------------------------------------" +
	    		"\n User Name - @" + tweets[i].user.screen_name + 
	    		"\n Time - " + tweets[i].created_at +
	    		"\n Tweet - " + tweets[i].text 
	    	);
		}
	  }

	  // Else condition Printing out in case there is an error
	  else{
	  	console.log("This is the error");
	  	console.log(error);
	  }
	});
}


//     MOVIE functions 
//===========================
var printMovie = function(err, response, body){
	console.log(
		"\n" + "Title: " +  JSON.parse(body).Title +
		"\n" + "Year: " + JSON.parse(body).Year + 
		"\n" + "Country: " + JSON.parse(body).Country +
		"\n" + "Language: " + JSON.parse(body).Language + 
		"\n" + "Plot: " + JSON.parse(body).Plot +
		"\n" + "Actors: " + JSON.parse(body).Actors
	);
}

//=============================




