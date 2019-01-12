var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#nodejs', //This means
  count: 10,
  result_type: 'recent',
  lang: 'en'
}


T.post('statuses/update', {status: "Whats up world"},  function(error, tweet, response) {
  if(error) {
    console.log(error);
    throw error;}
  })
