var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
  };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  

  db.burger.create(req.body).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var burgerID = req.params.id;
  
  
  db.burger.update(req.body,{
    where:{
      id:burgerID
    }
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;