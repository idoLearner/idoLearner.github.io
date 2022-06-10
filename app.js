//import
const express = require("express");
// const bodyParser = require("body-parser");
const routerContact = require("./routes/contact");
const routerGames = require("./routes/games");
const routerAbout = require("./routes/about");
const app = express();
//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/owl_carousel", express.static(__dirname + "public/owl_carousel"));

//views setup
app.set("views", "./views");
app.set("view engine", "ejs");
//view for index ejs
app.get("", (req, res) => {
  res.render("index");
});

//view for contact ejs
app.use("/contact", routerContact);
//view for games ejs
app.use("/games", routerGames);
//view for about ejs
app.use("/about", routerAbout);
//set server connection
const port = 5000;
app.listen(port, () => {
  console.log(`The port is not working ${port}`);
});
