var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

T.post('statuses/update', { status: 'hello world, but again. again #beyondyourlines' }, function(err, data, response)
{
})
