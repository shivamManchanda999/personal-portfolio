
const express = require('express');
const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/api/about', (req, res) => {
    res.render('about');
});

module.exports = app;
