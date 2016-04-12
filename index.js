//https://www.npmjs.com/package/twitter (documentation)
var emojify = require("./emojify"); //requiring the local file so use a relative url
var Twitter = require("twitter"); 
var creds = require("./auth.json") //loads credentials from the json
var client = new Twitter(creds); //creating a client object

// 1. Get the user's followers with "followers/ids" endpoint
//go to https://apps.twitter.com/ to get the info you need
//REST API

console.log("bot is running");

var tweetId = "719960960404992005";
function botInit(){
	client.post("statuses/retweet/" + tweetId, botInitiated);
	function botInitiated(error, data, response){
		if (error) {
			console.log('Bot could not be initiated. Error : ', error);
			//console.log("error", error);
		}
		else {
  			console.log('Bot initiated: ' + tweetId);
		}
	}
};

// var getFollowers = function(name, callback){
// 	client.get("followers/ids", {screen_name: "rachellefaroul"}, function(err, response){
// 		if (err) return console.log("Error!" + err);
// 		console.log(response); //console log the response or do whatever it is you're doing with the response
// 			//should see the ids for all of your followers
// 		callback(null, response.ids); //the callback is the Stream API function below
// 	});
// };

//STREAM API
//now that you've gotten a list of followers, watch them. 
// getFollowers("rachellefaroul", function(error, ids){
// 	//for kanye bot would change follow to track: 'keyword' and statuses to "users/search" to look for kanye activity
// 	//2. connect to stream for followers using "statuses/filter"
// 	client.stream("statuses/filter", { follow: ids.join() }, function(stream){
// 		stream.on("error", function(error) { 
// 			console.log(error) 
// 		});
// 		//callback function: what to do when a follower tweets
// 		stream.on("data", onTweet);
		
// 	});
// });

//3. what to do when a follower tweets
// var onTweet = function(tweet){
// 	console.log("user screenname (not the original poster): ", tweet.user.screen_name);
// 	// console.log("tweet object", tweet);
// 	console.log("tweet id", tweet.id);
// 	console.log("the tweet: ", tweet.text);
// 	var split = tweet.text.split(/\b/);
// 	var converted = split.map(emojify).join("");
// 	console.log(converted);
// 	// 3. On data, reply to tweets matching a given phrase with statuses/update
// 		//if converted includes 
	
// };

//how to retweet the tweet from the user once it's been converted
	//instead of console.log, want to post

botInit();





