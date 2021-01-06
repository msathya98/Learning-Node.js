const mongoose = require("mongoose");
const validator = require('validator')
mongoose.connect('mongodb://localhost:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true
})

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

const me = new User( {
	name: "    sai  ",
	Email: "  SaIMASS@zI.COM   " ,
	password: "password123"
})
 
 me.save().then(() => {
 	console.log(me)
 }).catch((error) => {
 	console.log('error', error)
 }) 



 const Tasks = mongoose.model('tasks', {
	description: {
		type: String,
		trim: true,
		required: true
	},
	completed: {
		type: Boolean,
		required: false,
		default: false
	}
})

const task1 = new Tasks({
	description: "Going to a mall",
	completed: true
})
 
 task1.save().then(() => {
 	console.log(task1)
 }).catch((error) => {
 	console.log('error', error)
 })
