const { Router } = require('express');
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const app = express();
//variable qui permet d'utiliser 


const router = express.Router();
const User = require('../models/User');

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/login', function (req, res) {
    res.render('login');
})

router.post('/login', function (req, res) {
    req.body.username
})



router.get('/createAcount', function (req, res) {
    res.render('createAcount');
})

router.post('/createAcount', function (req, res) {

    const { fname, user_email, user_password, user_pconfirme } = req.body;
    let errors = [];

    //check reauired field
    if (!fname || !user_email || !user_password || !user_pconfirme) {
        errors.push({ msg: 'Please full all the box' })
    }
    //check password macth
    if (user_password !== user_pconfirme) {
        errors.push({ msg: 'the two password does not macth' })
    }

    //check password leng

    if (user_password.length < 8) {
        errors.push({ msg: 'the password must have at least 8 number or characters' })
    }
    if (errors.length > 0) {
        res.render('createAcount', {
          errors,
          fname,
          user_email,
          user_password,
          user_pconfirme
        });
      } else {
        User.findOne({ email: email }).then(user => {
          if (user) {
            errors.push({ msg: 'Email already exists' });
            res.render('register', {
                errors,
                fname,
                user_email,
                user_password,
                user_pconfirme
            });
          } else {
            const newUser = new User({
                fname,
                user_email,
                user_password,
                user_pconfirme
            });
    
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.user_password, salt, (err, hash) => {
                if (err) throw err;
                newUser.user_password = hash;
                newUser
                  .save()
                  .then(user => {
                    req.flash(
                      'success_msg',
                      'You are now registered and can log in'
                    );
                    res.redirect('/users/login');
                  })
                  .catch(err => console.log(err));
              });
            });
          }
        });
      }


      




            //  try {
            //    //here I am buildeing a password security
            //    const hshedPassword = bcrypt.hash(req.body.user_password,  8)
            //    const hshedPConfirmePassword = bcrypt.hash(req.body.user_pconfirme, 8)
            //    users.push(
            //      {id: Date.now().toString(),
            //      fname: req.body.fname,
            //      user_email: req.body.user_email,
            //      user_password: hshedPassword,
            //      user_pconfirme: hshedPConfirmePassword}
            //    )
            //    res.redirect('/login');
            //  } catch (errors) {
            //    res.redirect('/createAcount')
            //  }

        
 })

        router.get('/changepassword', function (req, res) {
            res.render('changepassword');
        })

        router.get('/forgetpassword', function (req, res) {
            res.render('forgetpassword');
        })
      



        module.exports = router;