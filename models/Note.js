var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    notetitle : {
        type : String,
        required : true,
        unique : true
    },
    content : {
        type : String,
        required : true
    }
});

var Note = mongoose.model("Note",NoteSchema);

module.exports = Note;