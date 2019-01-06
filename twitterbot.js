console.log("Twitter Bot starts.");

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

tweetIt();
setInterval(tweetIt, 1000*60*30);

// Tweets a random number
function tweetIt() {
  var msg = rand().toString();
  T.post('statuses/update', { status: msg + '\n #randomnumber' }, tweeted );
}

function tweeted(err, data, response) {
  if(err) {
    console.log(err);
  } else {
    console.log("\n Finished!\n");
    //console.log(data);
  }
}

function rand() {
  return r = Math.floor(Math.random() * 101);
}
