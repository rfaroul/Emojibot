

watch for Kanye's tweet activity

when console.log(tweet) get the whole tweet object
tweet.text = "user: tweet" as string
"tweet.user" is an object of original author's info including screen_name
console.log("actual tweet: ", tweet.text);
			console.log("original poster: ", tweet.user.screen_name);

twitter_search_phrase = 'kanye' and 'interview' ('kanye AND interview')

want to use client.post(statuses/update...)
	parameters = status, in_reply_to_status_id, media_ids (maybe, if want to add gif or photos)
	how to dynamically add hashtags?

//////////////////////////////////

TWEET CONTENT
every time 'kanye' and 'interview' are mentioned in a tweet, direct message kanye with a tip that includes him granting interviews to black journalists and hosts.

////////////////////////////
HOW TO GENERATE CONTENT

need to make JSON call to get kanye tweets/lyrics/quotes
	- can make an object of quotes from Heben's article on Kanye. (140 characters or less)
		- article content: http://www.buzzfeed.com/hnigatu/in-defense-of-kanyes-vanity-the-politics-of-black-self-love#.cnvjK0Gme
	- then have another object of things to say to kanye ("go hang out with @hebenrants and @brokeymcpoverty on @anotherround", "@anotherround cures all", "interviewing with Black journalists might improve your image", "you'd be better off interviewing with Black journalists");
	- can have an array of strings that you randomly loop through to reply to kanye
		- 

