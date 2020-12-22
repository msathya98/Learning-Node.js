/*const fs = require("fs");

fs.writeFileSync('notes.txt', 'file will change see');
fs.appendFileSync('notes.txt', '  i apppend this data', 'utf8');*/
//require('./utils.js');
const note = require('./notes.js');
//const validator = require('validator');
//const name = 'sathya'
const chalk = require('chalk')
const nodemon = require('nodemon')

//console.log(name);
/*function add(a, b){
	return (a + b);
}*/

console.log(note())

//console.log(validator.isEmail('sathsy@hhcom'));
//console.log(validator.isURL('https:/ddhhdu.com'));
console.log(chalk.red.inverse.bold('Sucess'));


//module.exports = add;
