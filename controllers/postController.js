const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
router.get("/posts",(req,res)=>{
    Post.find({display : true})
        .populate("notes")
        .then(data => {
            res.render("index",data);
        });
});
router.get("/saved",(req,res)=>{
    Post.find({saved : true})
        .populate("notes")
        .then(data => {
            res.render("index",data);
        });
})

module.exports = router;