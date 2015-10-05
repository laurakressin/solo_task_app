var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html')
});

app.use(function(request, respone, next){
    var err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


module.exports = app;