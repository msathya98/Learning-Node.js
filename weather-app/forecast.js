const request = require('request');

const forecast = (latitude, longitude, callback) => {

	const url = "http://api.weatherstack.com/current?access_key=9741b4406deb88cfc642aae3ea655757&query=" + latitude + "," + longitude ;

request({url: url, json: true}, (error, response) => {
	if(error){
		callback("unable to connect to loaction services", undefined)
	}else if(response.body.error){
		callback("Unable to find loaction. Try another search", undefined)

	} else{
		callback(undefined, console.log("It is cuurently " + temp  + " degrees out.  There is a " + response.body.current.feelslike + " Chance of Rain"))

	}
})
}


module.exports = forecast;
