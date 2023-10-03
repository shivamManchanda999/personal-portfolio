
const express = require('express');
const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/api/contact', (req, res) => {
    res.render('contact');
});

module.exports = app;
