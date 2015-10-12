var express = require('express');
var router = express.Router();
var ToDo = require('../models/task');

router.get('/getList', function(request, response, next) {
   ToDo.find({}, function(err, toDo){
       response.json(toDo);
   })
});

router.post('/add', function(request, response, next){
    console.log("I am working");
    var newToDo = new ToDo(request.body);
    newToDo.save();
    response.sendStatus(200);
});

module.exports = router;