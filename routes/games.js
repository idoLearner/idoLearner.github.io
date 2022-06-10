const express = require("express");
const routerGames = express.Router();

routerGames.get("", (req, res) => {
  res.render("games");
});
module.exports = routerGames;
