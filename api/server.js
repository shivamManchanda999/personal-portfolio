const express = require("express");
const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

const listener = app.listen(0, () => {
  const { port } = listener.address();
  process.send({ port });
});
