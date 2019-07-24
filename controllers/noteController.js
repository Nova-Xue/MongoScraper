const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const Post = require("../models/Post");
router.post("/submit/:id",(req,res)=>{
    Note.create(req.body)
        .then(data => {
            Post.findOneAndUpdate({_id : req.params.id},{$push : {notes : data._id}},(err,data) => {
                err? console.log(err) : res.render("index",data);
            });
        }).catch(err);
});
router.put("/update/:id",(req,res)=>{
    Note.findOneAndUpdate({_id : req.params.id},{$set : req.body},(err,data)=>{
        err? console.log(err) : res.render("index",data);
    });
})
module.exports = router;