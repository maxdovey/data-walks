const express = require('express');
const app = express();
const PORT = 3000; //Change the port here


const PUBLIC_DIR = "/public"
const bodyParser = require('body-parser')
var fs = require('fs')
const directoryPath =  ('/assets/artists/')
const path = require('path'); 

require('dotenv').config();


// app.use(express.static('public'))
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded( { extended: true}))

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 