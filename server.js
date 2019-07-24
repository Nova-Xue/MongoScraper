var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();
var routes = require("./controllers");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });
app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes here

app.listen(PORT,function(){
    console.log("App running on "+ PORT);
    
});