const socket = io()

socket.on('message', () => {
	console.log('Welcome you !')
})

document.querySelector('message', () => {
	console.log('message')
	//socket.emit('increment')
})
