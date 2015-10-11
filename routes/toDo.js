var express = require('express');
var router = express.Router();
var ToDo = require('../models/task');

router.get('/getList', function(request, response, next) {
   ToDo.find({}, function(err, toDo){
       response.json(toDo);
   })
});

module.exports = router;