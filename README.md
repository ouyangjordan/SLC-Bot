# SLC-Bot

##### My email is ouyangjordan@gmail.com feel free to reach out.

### Link to the worksheet

https://docs.google.com/document/d/1XGntCNaxR00Ywk8f2XPgx8r5wihIu5QYHHS5bIRatE8/edit

### Link to our app/bot

https://twitter.com/SLCBot2

### Twitter NPM library documentation

https://www.npmjs.com/package/twit


This app will be used to demonstrate how you can interact with the twitter API.
Workshop participants will be able to use the keys to experiment with the twitter platform.

### Command Line cheat sheet

https://www.git-tower.com/blog/command-line-cheat-sheet/

Making a directory on your desktop!

cd == change directory

tip type "cd .." to go "back" to a previous directory

e.g. cd desktop

mkdir == make directory

e.g. mkdir <your folder name>

e.g. mkdir yourTwitterBotName

type "ls" to list the items in your current directory


### EXAMPLE COMMANDS FOR THE TWITTER CODE

From here : https://github.com/desmondmorris/node-twitter/tree/master/examples#tweet

EDIT THE BOTTOM PART OF APP.JS

#### tweet 'hello world!'

T.post('statuses/update', { status: 'hello world!' },
  function(err, data, response) {
  console.log(data)
})

#### Search twitter for all tweets containing the word 'banana' since July 11, 2011

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 },
  function(err, data, response) {
  console.log(data)
})


#### Ok a bit more involved, searching for tweets containing "UBCSLC" since jan 1, max of 1. Then retweets the tweet


T.get('search/tweets', { q: 'UBCSLC since:2019-01-01', count: 1,lang :'en' },
  function(err, data, response) {
  //console.log(data.statuses[0].id_str);

  T.post('statuses/retweet/' + data.statuses[0].id_str, function(error, tweet, response) {
    if (!error) {
    console.log(tweet);
  }
})
})

#### Similar to the above, searches for tweets containing "UBCSLC Faces Of" since jan 1, max of 1, then replys to tweet saying nice tweet!

T.get('search/tweets', { q: 'UBCSLC Faces Of since:2019-01-01', count: 1,lang :'en' },
  function(err, data, response) {
  //console.log(data.statuses[0].id_str);

  console.log(data.statuses[0]);
  var reply = 'Nice tweet slc!'
  var nameID = data.statuses[0].id_str;
  var name = data.statuses[0].user.screen_name;

  T.post('statuses/update', {in_reply_to_status_id: nameID, status: reply +
    ' ' + ' @' + name}, function(err, data, response) {
    {
      if (err) {
        console.log(err)
      } else {
        console.log(data.text + ' tweeted!')
      }
    }
  })
})
