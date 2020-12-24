/*const event ={
	name: 'Birthday party',
	guestList: ["sathya", "mahi", "kushal"],
	printGuestList(){
		console.log('Guest list for ' + this.name)

		this.guestList.forEach((guest) => {
			console.log(guest + " is attending  " + this.name)
		})

	}
}

event.printGuestList()*/

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Clean yadddfdfdsrd',
        completed: false
    },
    {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
     this.tasks.forEach((task) => {
    	  if(task.completed === false){
           console.log(task);
    	  }
    	})
    
    }
}

console.log(tasks.getTasksToDo())
