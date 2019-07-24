const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
const scrapeRoute = require("./controllers/scrape");
const postRoute = require("./controllers/postController");
const noteRoute = require("./controllers/noteController");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });
app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(scrapeRoute);
app.use(postRoute);
app.use(noteRoute);
app.listen(PORT,function(){
    console.log("App running on "+ PORT);
    
});