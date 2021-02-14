var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.locals.css = ["index.css"];
  res.locals.js = ["index.js"];
  res.locals.preloadContent = "<div><h1>Welcome!</h1></div>"
  res.render("index.hbs", { title: "Home - Timur Kalandarov"});
});

/* GET bio page. */
router.get("/biography", function (req, res, next) {
  res.locals.css = ["biography.css"];
  res.render("biography.hbs", { title: "Biography - Timur Kalandarov"});
});

module.exports = router;
