const express = require("express");
const app = express();
const path = require("path");

// Setting up the view engine as EJS
app.set("view engine", "ejs");
// Setting the views directory
app.set("views", path.join(__dirname, "..", "views"));

// Serving static files from the public directory
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/contact", (req, res) => {
  res.render("contact");
});

module.exports = app;
