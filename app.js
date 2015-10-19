var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser')
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser());
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

//Email from hire page ,[handeling post request]
app.post('/hire', function (req, res) {
  
  var sendgrid  = require('sendgrid')('gmailsharedtasks', 'Anu.maher*2');
  var email     = new sendgrid.Email({
  to:       'jitin.maher@gmail.com',
  from:     req.body.email,
  subject:  'New Project',
  text:     'Number:-' + req.body.number + '\n' + 'Details:-' + req.body.details
  });
  sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
  res.render('index', {
    title: 'Welcome'
  });
  });
});
app.listen(3000);