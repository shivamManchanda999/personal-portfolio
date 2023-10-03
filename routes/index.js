// Required dependencies
const express = require("express");
// Creating a new router
const router = express.Router();

// Route for home page
router.get("/", (req, res) => {
  res.render("home");
});

// Route for about page
router.get("/about", (req, res) => {
  res.render("about");
});

// Route for services page
router.get("/services", (req, res) => {
  res.render("services");
});

// Route for contact page
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Route for projects page
router.get("/projects", (req, res) => {
  res.render("projects");
});

// Exporting the router for use in other modules
module.exports = router;
