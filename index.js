var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Connection URL
//TODO: move username & pass to env variabbles
var url = 'mongodb://user:user@ds129038.mlab.com:29038/reminder_by_url';

app.get('/user/:user', function(req, res) {
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
	  
		var collection = db.collection(req.params.user);
		collection.find({}).toArray(function(err, docs) {
			var reminders = docs[0].reminders;
			assert.equal(err, null);
			
			var obj = {};
			for (var i=0; i<reminders.length; i++) {
				obj[reminders[i]['url']] = reminders[i]['messages'];
			}
			db.close();
			res.send(obj);
		});
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});