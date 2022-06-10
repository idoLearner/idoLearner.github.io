const express = require("express");
const routerContact = express.Router();
routerContact.get("", (req, res) => {
  res.render("contact");
});
module.exports = routerContact;
