var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  var condition = req.params.devoured;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;