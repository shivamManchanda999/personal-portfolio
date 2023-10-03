const express = require("express");
const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/api/services", (req, res) => {
  res.render("services");
});

module.exports = app;
