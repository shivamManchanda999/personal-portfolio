const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.render("home");
});

// About route
router.get("/about", (req, res) => {
  res.render("about");
});

//services route
router.get("/services", (req, res) => {
  res.render("services");
});

// Contact route
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Projects route
router.get("/projects", (req, res) => {
  res.render("projects");
});

module.exports = router;
