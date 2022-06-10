const express = require("express");
const routerAbout = express.Router();

routerAbout.get("", (req, res) => {
  res.render("about");
});
module.exports = routerAbout;
