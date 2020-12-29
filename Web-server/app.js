const express = require('express');
const path = require('path');
const app = express()

const Path1 = path.join(__dirname, '/public')

console.log(Path1);

app.use(express.static(Path1)); 

app.get('', (req, res) => {
	res.send("hello guys")
})


app.get('/weather', (req, res) => {
	res.send({
		weatherUpdates: 'By sathya',
		temp: 30
	})
	}
)



app.listen(3000, () => {
	console.log("Server started")
})
