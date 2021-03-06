const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const Post = require("../models/Post.js");

const router = express.Router();

const checkExist = (title,link) => {
    Post.findOne({ title: title })
    .then(data => data == null? newPost(title,link) : oldPost(title,link))
    .catch(err => console.log(err));
}
const newPost = (title, link) => {
    Post.create({ title: title, link: link })
    .then()
    .catch(err => console.log(err));
}
const oldPost = (title, link) => {
    Post.findOneAndUpdate({ title: title }, { $set: { title: title, link: link, display: true } })
    .then()
    .catch(err => console.log(err));
}
router.get("/",(req,res)=>{
    Post.find({display : true}).populate("notes")
        .then(posts => {
            res.render("index",{posts : posts});
        })
        .catch(err => console.log(err));
});
router.get("/scrape", (req, res) => {

    //ajax to get the html page
    //ny time tech section
    axios.get("https://www.nytimes.com/section/technology").then((response) => {
        //load data to $
        const $ = cheerio.load(response.data);
        //grab and save data here
        //save new post update display property of old posts
        $(".css-ye6x8s").each((i, element) => {
            let link = "https://www.nytimes.com" + $(element).find("a").attr("href");
            let title = $(element).find("h2").text();
            checkExist(title,link);
        });
        
        res.status(200).end();
    });
});

module.exports = router;