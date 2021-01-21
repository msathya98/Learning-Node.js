const path = require('path');
const http = require('http')
const express = require("express");
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))



io.on('connection', (socket) => {
	console.log('new Websocket connection')

	socket.emit('message')


// socket.emit('countUpdated', count)

// socket.on('increment', () => {
// 	count++
// 	socket.emit('countUpdated', count)
// })
}) 

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})
