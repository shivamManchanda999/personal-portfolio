// Required dependencies
const express = require("express");
const app = express();
const path = require("path");
// Importing main router
const indexRouter = require("./routes/index");

// Setting up the view engine as EJS
app.set("view engine", "ejs");
// Setting the views directory
app.set("views", path.join(__dirname, "views"));

// Serving static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Using the main router for the root path
app.use("/", indexRouter);

// Setting the server port
const PORT = process.env.PORT || 3000;
// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
