
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');


const express = require('express');

//The bcrypt hashing function allows 
//us to build a password security platform that scales 
//with computation power and always hashes every password with a salt.
const bcrypt =  require('bcrypt');



// initializePassport(passport);
require('./db/passport')(passport);


//Setting Database
const db = require('./db/db').MongoURI;

//connecting to mongo
mongoose.connect(db, { useNewUrlParser: true })

 .then(() =>console.log('MongoDB connected'))
 .catch(err => console.log(err));

let loginRoutes = require('./routes/login');

const users = [];

const app = express();

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded({ extended: false })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)


//set routes 
 app.use(loginRoutes);

 // Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());


 //this handle error 
app.use(function (error, req, res, next) {
    // Default error handling function
    // Will become active whenever any route / middleware crashes
    console.log(error);
    res.status(500).render('500');
  });
  

  
  app.listen(3001);