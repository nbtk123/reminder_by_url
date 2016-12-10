var express = require('express');
var MongoClient = require('mongodb').MongoClient;
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
	  
		var collection = db.collection('nbtk123');
		collection.find({}).toArray(function(err, docs) {
			assert.equal(err, null);
			
			db.close();
			response.send(docs[0]);
		});
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});