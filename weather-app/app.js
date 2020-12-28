const url = "http://api.weatherstack.com/current?access_key=9741b4406deb88cfc642aae3ea655757&query=12.3426750,76.6232550";

request({ url: url, json: true}, (error, response) => {
 const temp = (response.body.current.temperature);
 const precip = (response.body.current.percip);

	console.log("It is cuurently " + temp  + " degrees out.  There is a " + response.body.current.feelslike + " Chance of Rain.");
}) 

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0aHlhLTE5OTgiLCJhIjoiY2tqODk2b2tyMTJibDJzbnlpaWFtNGs4biJ9.b_L89uQrpXDclltkkOsGTg';

request({ url: url1, json: true}, (error, response) => {

	if(error){
		console.log("Unable to connect to weather server.")
	}else if(response.body.features.length === 0){
		
		console.log("unbale to find value undifined");
	}else{
		console.log(response.body.features[0].center[1]);
	}



});
