var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.locals.css = ["index.css"];
  res.locals.js = ["index.js"];
  res.render("index.hbs", { title: "Timur Kalandarov - Software Developer"});
});

module.exports = router;
