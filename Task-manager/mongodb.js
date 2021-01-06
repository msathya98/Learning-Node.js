



const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager"

const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
	if(error){
		return console.log("unable to connect");
	}

	const db = client.db(databaseName)
	/*db.collection("users").insertOne({
		_id: id,
		name: "Chandru",
		age: 27
	}, (error, result) => {
		if(error){
			return console.log("unable to insert user")
		}

		console.log(result.ops);
	}) */


/*db.collection("tasks").insertMany([{
		name: "Go to mall",
		result: true
	},{
		name: "Buying some fruits",
		result: false
	},{
		name: "Buying some books",
		result: true
	}]
	, (error, result) => {
		if(error){
			return console.log("unable to insert tasks")
		}

		console.log(result.ops);
	})*/

	/*db.collection("tasks").find({_id: new ObjectID("5ff5518212b2cf0c832618a9")}).toArray((error, task) => {
		console.log(task);
	})
	db.collection("tasks").find({result: true}).toArray((error, task) => {
		console.log(task);
	})
db.collection("tasks").find({result: true}).count((error, task) => {
		console.log(task);
	})*/

	const deletepromise = db.collection("users").deleteMany({
		age: 22
		
	}).then((result) => {
		console.log(result)
	}).catch((error) => {
         console.log(error)
	})
})


	
