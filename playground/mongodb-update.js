//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	db.collection('Users').update({_id: new ObjectID("5c2bac27a817ed0bb69963aa")}, {$inc: {age: 1}, $set: {name: "Jeny"}}, {returnOriginal: false}).then((result) => {console.log(result)});

	//client.close();
}); 
