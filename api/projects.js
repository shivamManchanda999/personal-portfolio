
const express = require('express');
const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/api/projects', (req, res) => {
    res.render('projects');
});

module.exports = app;
