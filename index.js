//https://www.npmjs.com/package/twitter (documentation)
var emojify = require("./emojify"); //requiring the local file so use a relative url
var Twitter = require("twitter"); 
var creds = require("./auth.json") //loads credentials from the json
console.log("creds", creds);
var client = new Twitter(creds); //creating a client object

// 1. Get the user's followers with "followers/ids" endpoint
//go to https://apps.twitter.com/ to get the info you need
//REST API
var getFollowers = function(name){
	client.get("followers/ids", {screen_name: "rachellefaroul"}, function(err, response){
		if (err) return console.log("Error!" + err);
		console.log(response); //console log the response or do whatever it is you're doing with the response
			//should see the ids for all of your followers
		//callback(null, response.ids);
	});
};
getFollowers();