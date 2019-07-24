var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var Post = require("../models/Post.js");

var router = express.Router();

router.get("/scrape",function(req,res){
    
    //ajax to get the html page
        axios.get("").then(function(response){
            //load data to $
            var $ = cheerio.load(response.data);
            //grab and save data here
            //save to an array
            var results = [];
            $().each(function(i,element){

                results.push();
            });
            //render to front end
            //save to db
            Post.create(results)
                .then(function(data){
                    console.log(data);
                    
                })
                .catch(function(err){
                if (err) {
                    console.log(err);
                    
                }
            });
        });
});

module.exports = router;