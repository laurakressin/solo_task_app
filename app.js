var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var toDo = require('routes/toDo');

var mongoURI = "mongodb://localhost:27017/WednesdayDatabase";

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.once('open', function(){
    console.log('Connected to MongoDB!');
});

mongoDB.on('error', function(err){
    if(err){
        console.log('MongoDB error', err);
    }
});

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

app.use('/jquery', express.static(path.join(__dirname, './node_modules/jquery/dist')));


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