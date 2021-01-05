

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
	if(error){
		return console.log("unable to connect");
	}

	const db = client.db(databaseName);
	/*db.collection("users").insertOne({
		name: "Sathya",
		age: 22
	}, (error, result) => {
		if(error){
			return console.log("unable to insert user")
		}

		console.log(result.ops);
	}) */


db.collection("users").insertMany([{
		name: "Sathya",
		age: 22
	},{
		name: "Mahi",
		age: 24
	},{
		name: "pramod",
		age: 12
	}]
	, (error, result) => {
		if(error){
			return console.log("unable to insert user")
		}

		console.log(result.ops);
	})
})
