var app = require('express')(); // this is for express JS
var http = require('http').Server(app); 
var io = require('socket.io')(http); //this is for the 
var path = require('path');
 
app.get('/', function(req, res){    // Initialize appication with route
  var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, '../chat', 'login.html'));
});
  

io.on('connection', function(socket){   // Register events on socket connection
  socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
  });
});
 
http.listen(8000, function(){                 // Listen application request on port 8000
  console.log('listening on *:8000');
});