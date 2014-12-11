/**************
* INIT TWITTER
* DO NOT TOUCH
**************/

var Twit = require('twit');
var stream = [];

var T = new Twit({
    consumer_key: 'EPklYpsfzCzP7iJKXs0TsDDew',
    consumer_secret: 'w4gj6UooZSRiDhACX20BJiwyBucqegeOI6VYlJvo1Hi8lQqmfs',
    access_token: '2914457025-t2j59RCqJ4Zq5uXC4Kn6f1OBkKOWaKy3MIo3Gci',
    access_token_secret: 'IlrUaVY81944aH2vmpVl9LCeq6nlp0cSkKsBZcM8dtPp1'
});

/************
 * EXAMPLE CODE WATCHING OWN ACCOUNT
 ***********/

// Create stream that filters on current user
stream['username'] = T.stream('user');

// Add callback when stream is triggered
stream['username'].on('tweet', function (tweet) {
    console.log("Tweet found on @creative_progra");
    console.log(tweet.text);
});

/************
 * EXAMPLE CODE WATCH FOR HASHTAG #creativeProgramming
 ***********/

// Create stream that filters on #creativeProgramming
stream['hashtag'] = T.stream('statuses/filter', { track: '#creativeProgramming' });

// Add callback when stream is triggered
stream['hashtag'].on('tweet', function (tweet) {
    console.log("Found tweet for #creativeProgramming!");
    console.log(tweet.text);
});

/************
 * EXAMPLE CODE TWEETING
 * Added unix timestamp to make tweet unique
 ***********/

T.post('statuses/update', {
        status: 'Running node app! #creativeProgramming ' + new Date().getTime()
    }, function(err, data, response) {
    console.log("Tweeting: 'Running node app! #creativeProgramming'");
    console.log(data);
});