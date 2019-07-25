var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    notetitle : {
        type : String,
        required : "required",
    },
    content : {
        type : String,
        required : "required"
    }
});

var Note = mongoose.model("Note",NoteSchema);

module.exports = Note;