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
    socket.on('SYNC_DECKS', data => {
      io.emit('SYNC_DECKS_R', data)
      console.log('Sync Decks')
    })
    socket.on('DRAW_CARD', data => {
      console.log('Draw Card')
      io.emit('DRAW_CARD_R', data)
    })
    socket.on('PLAY_HIDEOUT', data => {
      console.log('Play Hideout')
      // console.log(data.card)
      io.emit('PLAY_HIDEOUT_R', data)
    })
    socket.on('RETURN_HIDEOUT', data => {
      console.log('Return Hideout')
      io.emit('RETURN_HIDEOUT_R', data)
    })
    socket.on('SUBMIT_HIDEOUT', () => {
      console.log('Submit Hideout')
      io.emit('SUBMIT_HIDEOUT_R')
    })
    socket.on('MAKE_GUESS', data => {
      console.log('Make Guess')
      io.emit('MAKE_GUESS_R', data)
    })
});
