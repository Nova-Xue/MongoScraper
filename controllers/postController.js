const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
router.get("/api/posts",(req,res)=>{
    Post.find()
        .populate("notes")
        .then(data => {
            res.json(data);
        });
});
router.get("/saved",(req,res)=>{
    Post.find({saved : true}).populate("notes")
        .then(posts => {
            res.render("index",{posts : posts});
        });
});
router.get("/clear",(req,res)=>{

    Post.updateMany({},{$set : {display : false}})
        .then(data =>res.status(200).end())
        .catch(err=>console.log(err))
});
router.put("/save/:id",(req,res)=>{
    Post.findOneAndUpdate({_id : req.params.id},{$set : { saved : true}})
        .then(data => res.status(200).end())
        .catch(err => console.log(err));
});
router.put("/delete/:id",(req,res)=>{
    Post.findOneAndUpdate({_id : req.params.id},{$set : { display : false,saved : false}})
        .then(data => res.status(200).end())
        .catch(err => console.log(err));
});
router.get("/notesOfPost/:id",(req,res)=>{
    Post.findOne({_id : req.params.id})
        .populate("notes")
        .then(post =>{
            res.send({notes : post.notes});
        })
        .catch(err=>{console.log(err)});
});
module.exports = router;