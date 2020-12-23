//require('./utils.js');
const notes = require('./notes.js');
//const validator = require('validator');
//const name = 'sathya'
const chalk = require('chalk')
const nodemon = require('nodemon')
const yargs = require('yargs')



//module.exports = add;

/* const command = process.argv[2]
console.log(process.argv[2]);

if(command === 'add'){
	console.log('adding note');
} if(command === 'remove'){
	console.log('removing note');
} */

//console.log(process.argv)

//Creating a commands

yargs.command({
	command: 'add',

	builder:{
		title: {
		    //demandOption: true,
            type: 'string'

		},
		body: {
			describe: 'Note decription',
			//demandOption: true,
            type: 'string'
		}
	},
	handler: function (argv){
		notes.addNote(argv.title, argv.body)
	}
})

/*yargs.command({
	command: 'remove',
	describe: 'Remove the note',
	handler: function(){
		console.log("Removing the note")
	}

})

yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function(){
		console.log("reading a note")
	}
})

yargs.command({
	command: 'list',
	describe: 'listing notes',
	handler: function(){
		console.log("Listing all notes")
	}

})


console.log(yargs.argv)*/
yargs.parse();
