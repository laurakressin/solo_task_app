var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    item: String,
    created_at: Date,
    isDone: Boolean
});

toDoSchema.pre('save', function(next){
    var currentDate = new Date();
    if(!this.created_at){
        this.created_at = currentDate;
    }
    this.isDone = false;
    next();
});

var ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
