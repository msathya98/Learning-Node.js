const request = require('request');

const geocode = (address, callback) => {

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2F0aHlhLTE5OTgiLCJhIjoiY2tqODk2b2tyMTJibDJzbnlpaWFtNGs4biJ9.b_L89uQrpXDclltkkOsGTg';

request({url, json: true}, (error, response) => {
	if(error){
		callback("unable to connect to loaction services", undefined)
	}else if(response.body.features.length === 0){
		callback("Unable to find loaction. Try another search", undefined)

	} else{
		callback(undefined,{
			longitude: response.body.features[0].center[0],
			latitude: response.body.features[0].center[1],
			location: response.body.features[0].place_name

		})

	}
})
}

module.exports = geocode;
