var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

T.post('statuses/update', { status: 'hello world, but again.' }, function(err, data, response)
{
})
