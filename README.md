SLC-Bot

Link to the worksheet

https://twitter.com/SLCBot2

https://docs.google.com/document/d/1XGntCNaxR00Ywk8f2XPgx8r5wihIu5QYHHS5bIRatE8/edit

Twit library documentation

https://www.npmjs.com/package/twit


This app will be used to demonstrate how you can interact with the twitter API. Workshop participants will be able to use the keys to experiment with the twitter platform.

Making a directory on your desktop!

cd == change directory

tip type "cd .." to go "back" in the directory

e.g. cd desktop

mkdir == make directory

e.g. mkdir <your folder name>


EXAMPLE COMMANDS FOR THE TWITTER CODE

EDIT THE BOTTOM PART OF APP.JS

//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
