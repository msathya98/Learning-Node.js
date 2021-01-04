const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const request = require('request');


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
		title: 'Weather',
		name: 'Sathya'
	})
})

app.get('/help', (req, res) => {
	res.render("help", {
		title: 'Help',
	    name: 'Sathya'
	})
})

app.get('/about', (req, res) => {
	res.render("about", {
		title: 'About',
	
	 name: 'Sathya'
	})
})

app.get('/weather', (req, res) => {
	if(!req.query.address){
		return res.send({
			error: "You must provide an address"
		})
	}

   geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
   	if(error){
   		return res.send({error});
   	}

   	 forecast(latitude, longitude, (error, forecastData) => {
   	 	if(error) {
   	 		return res.send({error})

   	 	}

   	 	res.send({
   	 		forecast: forecastData, location,
   	 		address: req.query.address
   	 	})
   	 })
	/*res.send({
		address: response.body.features[0].place_name,
		temp: 30

	})*/
	})
})

app.get('/products', (req, res) => {
	if(!req.query.search){
		return res.send({
			error: "You must provide a search option"
		})
	}
	
	res.render({
		products: []
	})
})

app.get('/help/*', (req, res) => {
	res.render("404",{
		message1: "Help article not found",
		name: 'Sathya'
	})
})

app.get('*', (req, res) => {
	res.render("404",{
		message1: "404 error page not found",
		name: 'Sathya'
	})
})



app.listen(3000, () => {
	console.log("Server started")
})
