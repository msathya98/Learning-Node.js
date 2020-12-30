const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const app = express()

const Path1 = path.join(__dirname, '/public')
const  viewsPath = path.join(__dirname, '/templates/views')
const  partialsPath = path.join(__dirname, '/templates/partials')

console.log(Path1);

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(Path1)); 

app.get('', (req, res) => {
	res.render("index", {
		title: 'Home',
		name: 'sathya'
	})
})

app.get('/help', (req, res) => {
	res.render("help", {
		title: 'Help',
	    name: 'sathya'
	})
})

app.get('/about', (req, res) => {
	res.render("about", {
		title: 'About',
	
	 name: 'sathya'
	})
})

app.get('/weather', (req, res) => {
	if(!req.query.address){
		return res.send({
			error: "You must provide an address"
		})
	}


	res.send({
		address: response.body.features[0].place_name,
		temp: 30

	})
	}
)

app.get('/products', (req, res) => {
	if(!req.query.search){
		return res.send({
			error: "You must provide a search option"
		})
	}
	console.log(req.query.search)
	res.send({
		products: []
	})
})

app.get('/help/*', (req, res) => {
	res.render("404",{
		message1: "help article not found",
		name: 'sathya'
	})
})

app.get('*', (req, res) => {
	res.render("404",{
		message1: "404 error page not found",
		name: 'sathya'
	})
})



app.listen(3000, () => {
	console.log("Server started")
})
