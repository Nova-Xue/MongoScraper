const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const Post = require("../models/Post");
router.post("/submit/:id",(req,res)=>{
    Note.create(req.body)
        .then(newNote => {
            Post.findOneAndUpdate({_id : req.params.id},{$push : {notes : newNote._id}},(err,data) => {
                err? console.log(err) : res.redirect("/");
            });
        }).catch(err=>console.log(err));
});
router.put("/update/:id",(req,res)=>{
    Note.findOneAndUpdate({_id : req.params.id},{$set : req.body},(err,data)=>{
        err? console.log(err) : res.render("index",data);
    });
})
module.exports = router;