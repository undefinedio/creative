var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*******
 * DEFINE ROUTE
 *******/

app.get('/', function(req, res){
    res.sendFile(__dirname + '/socket.html');
});

/*******
 * LISTEN FOR SOCKET MESSAGES
 *******/

io.on('connection', function(socket){
    socket.on('message', function(msg){
        console.log('message: ' + msg);
    });
});

/*******
 * START SERVER
 *******/

http.listen(3000, function(){
    console.log('listening on *:3000');
});