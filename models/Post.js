var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema ({
    title : {
        type : String,
        required : "required",
        unique : true
    },
    link : {
        type : String,
        required : "required",
        unique : true
    },
    display : {
        type : Boolean,
        default : true
    },
    saved : {
        type : Boolean,
        default : false
    },
    notes : [{
        type : Schema.Types.ObjectId,
        ref : "Note"
    }]
});

var Post = mongoose.model("Post",PostSchema);

module.exports = Post;