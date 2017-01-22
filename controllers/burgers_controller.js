var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(burgerAdded){
    res.json(burgerAdded);
  })
  // burger.insertOne([
  //   "burger_name", "devoured" 
  // ], [
  //   req.body.burger_name, req.body.devoured
  // ], function() {
  //   res.redirect("/burgers");
  // });
});

router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      },{
      where: {
        id: req.body.id
      }
      }).then(function(results){
        res.json(results);
      });
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burger.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/burgers");
  // });
});

module.exports = router;
