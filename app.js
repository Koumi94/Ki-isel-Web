const path = require('path');

const express = require('express');



let loginRoutes = require('./routes/login');



const app = express();
// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)

// app.use(loginRoutes);
app.get('/', function(req,res){
  res.render('index');
})

app.use(function (error, req, res, next) {
    // Default error handling function
    // Will become active whenever any route / middleware crashes
    console.log(error);
    res.status(500).render('500');
  });
  
  app.listen(3001);