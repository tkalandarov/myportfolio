var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.locals.css = ["index.css"];
  res.locals.js = ["index.js"];
  res.locals.preloadContent = "<div><h1>Welcome!</h1></div>"
  res.render("index.hbs", { title: "Express"});
});

module.exports = router;
