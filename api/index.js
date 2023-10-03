const express = require('express');
const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/api/index', (req, res) => {
    res.render('home');
});

module.exports = app;