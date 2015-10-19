var express = require('express');
var router = express.Router();
var app = express();

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Welcome'
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Welcome'
  });
});

app.get('/work', function(req, res) {
  res.render('work', {
    title: 'My Works'
  });
});
app.get('/about', function(req, res) {
  res.render('about', {
    title: 'About me'
  });
});
app.get('/hire', function(req, res) {
  res.render('hire', {
    title: 'HIRE JITIN'
  });
});
app.get('/index', function(req, res) {
  res.render('index', {
    title: 'Welcome'
  });
});

module.exports = router;