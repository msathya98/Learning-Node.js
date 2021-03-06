const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = function(title){
const notes = loadNotes()
const notesToKeep = notes.filter(function(note){
	return note.title !== title
})
if (notesToKeep.title > notes.title) {

	console.log(chalk.red('no notes found'));
}else{
	console.log(chalk.green( 'notes removed'));
	 saveNotes(notesToKeep);
}

  }

  const listNotes = function(title, body){
  	console.log("Your notes")
 const notes = loadNotes();
 notes.forEach((note) => {

		console.log(note.title);
 })

}

/*const toListNotes = (notes) => {
	this.notes.forEach((list) => {
		console.log(notes.title);
	}
}*/


const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title )
  if(note){
  	console.log(chalk.blue(note.title))
  	console.log(note.body)

  }else {
  	console.log(chalk.red("Note not found"))
  }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
