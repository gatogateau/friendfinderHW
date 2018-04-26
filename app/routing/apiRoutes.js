var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require("path");
// export apiRoutes.js

// take in the data from the survey and send to api/friends


// require the friends array from data/friends.js
var userData = require("../data/friends");


// get info from url api friends and post userData to page
app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

// not defined?   does this need to be placed on the HTML page?





module.exports = function (app) {

        // require the friends page data
        var friendsData = require("../data/friends");

        // get route to api/friends, to display JSON of all friends
        app.get("/api/friends", function (req, res) {
            res.json(friendsData);

        });

        // post to list of Friends
        app.post("/api/friends", function (req, res) {

            friendsData.push(req.body);
            res.json(true);

        });
    }