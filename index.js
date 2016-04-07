//https://www.npmjs.com/package/twitter (documentation)
var emojify = require("./emojify"); //requiring the local file so use a relative url
var Twitter = require("twitter"); 
var creds = require("./auth.json") //loads credentials from the json
console.log("creds", creds);
var client = new Twitter(creds); //creating a client object

// 1. Get the user's followers with "followers/ids" endpoint
//go to https://apps.twitter.com/ to get the info you need
//REST API
var getFollowers = function(name, callback){
	client.get("followers/ids", {screen_name: "rachellefaroul"}, function(err, response){
		if (err) return console.log("Error!" + err);
		console.log(response); //console log the response or do whatever it is you're doing with the response
			//should see the ids for all of your followers
		callback(null, response.ids); //the callback is the Stream API function below
	});
};

//STREAM API
//now that you've gotten a list of followers, watch them. 
getFollowers("rachellefaroul", function(error, ids){
	//for kanye bot would change follow to track: 'keyword' and statuses to "users/search" to look for kanye activity
	//2. connect to stream for followers using "statuses/filter"
	client.stream("statuses/filter", { follow: ids.join() }, function(stream){
		stream.on("error", function(error) { 
			console.log(error) 
		});
		//callback function: what to do when a follower tweets
		stream.on("data", function(tweet){
			console.log("actual tweet: ", tweet.text);
			console.log("user screenname (not the original poster): ", tweet.user.screen_name);
		});
	});
});

//3. what to do when a follower tweets
// var onTweet = function(tweet){
// 	console.log(tweet.text);
// 	var split = tweet.text.split(/\b/);
// 	var converted = split.map(emojify).join("");
// 	console.log(converted);
// }