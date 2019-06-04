var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP

var buymeSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model("buy005", buymeSchema);



        var name = "Camp 1";
        var image = "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg";
        var description = "Test campground. Cool place among trees"
        var newCampground = {name: name, image: image, description: description};
        // Create a new campground
        Campground.create(newCampground, function(err,campground) {
            if(err) {
            console.log("Error returned on creating new campground")
            console.log(err)
        } else {
                console.log("campground added successfully");
        }
    });

