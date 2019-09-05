const express = require('express')

// var cors = require('cors')

const http = require('http')
const socketIo = require('socket.io')


const app = express();

// app.use(cors())

const server = http.createServer(app)
const io = socketIo(server)

// socket listening 
io.on('connection', socket =>{
    console.log('cosket connected : ', socket.id)

    socket.on('message', body=>{

        console.log(body)

        socket.broadcast.emit('message',{
            body,
            from: socket.id.slice(8)
        })
    })
})

server.listen(5050, ()=>{
    console.log('server run on localhost:5050')
})