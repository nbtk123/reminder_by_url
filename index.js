var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Connection URL
//TODO: move username & pass to env variabbles
var url = 'mongodb://user:user@ds129038.mlab.com:29038/reminder_by_url';

app.get('/', function(request, response) {
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	  db.close();
	  response.send('Connected successfully to server');
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


