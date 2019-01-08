const express = require('express');

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    if (io.engine.clientsCount == 1) {
      io.emit('FUGITIVE_CONNECTED')
      console.log('fugitive connected')
    }
    else if (io.engine.clientsCount == 2) {
      io.emit('DETECTIVE_CONNECTED')
      console.log('detective connected')
    }
    else {
      io.emit('SPECTATOR_CONNECTED')
      console.log('spectator connected')
    }
});
