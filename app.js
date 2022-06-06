const path = require('path');

const express = require('express');
//The bcrypt hashing function allows 
//us to build a password security platform that scales 
//with computation power and always hashes every password with a salt.
const bcrypt =  require('bcrypt');
const passport = require('passport');

const initializePassport = require('./passport-config');
initializePassport(passport);

let loginRoutes = require('./routes/login');

const users = [];

const app = express();
// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded({ extended: false })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)

// app.use(loginRoutes);
 app.get('/', function(req,res){
     res.render('index');
 })

 app.get('/login', function(req,res){
  res.render('login');
})

app.post('/login', function(req,res){
 req.body.username
})



app.get('/createAcount', function(req,res){
  res.render('createAcount');
})

app.post('/createAcount', async function(req,res){
  try {
    //here I am buildeing a password security
    const hshedPassword = bcrypt.hash(req.body.user_password,  8)
    const hshedPConfirmePassword = bcrypt.hash(req.body.user_pconfirme, 8)
    users.push(
      {id: Date.now().toString(),
      fname: req.body.fname,
      user_email: req.body.user_email,
      user_password: hshedPassword,
      user_pconfirme: hshedPConfirmePassword}
    )
    res.redirect('/login');
  } catch (error) {
    res.redirect('/createAcount')
  }

  console.log(users);
})

app.get('/changepassword', function(req,res){
  res.render('changepassword');
})

app.get('/forgetpassword', function(req,res){
  res.render('forgetpassword');
})



app.use(function (error, req, res, next) {
    // Default error handling function
    // Will become active whenever any route / middleware crashes
    console.log(error);
    res.status(500).render('500');
  });
  
  app.listen(3001);