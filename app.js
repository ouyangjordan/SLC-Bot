var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


T.post('statuses/update', {status: "Whats up world pt 3"},  function(error, tweet, response) {
  if(error) {
    console.log(error);
    throw error;
  }
})
