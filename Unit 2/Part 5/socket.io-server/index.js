var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { cors: { origin: '*' } });
server.listen(5000);

io.on('connection', socket => {
    socket.on('new-message', data => {
        socket.emit('message', data); // Boradcast messages
    });
});

