const mongoose = require("mongoose");
const validator = require('validator')

const User = mongoose.model('user', {
	name: {
		type: String,
        required: true,
        trim: true
	},

 Email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error("email is invalid")
			}



		}
	},

password: {
	type: String,
	required: true,
	trim: true,
	validate(value){
		if(value.length <= 6){
			throw new Error("password must be greater than 6 characters")
		} else if( value == "password" ){
			throw new Error("Change your password to strong one!")
		}
	}
},

	age: {
		type: Number,
		default: 0,
		validate(value){
			if(value < 0){
				throw new Error("Please Enter a valid age number")

			}
		}
	}
})


module.exports = User
