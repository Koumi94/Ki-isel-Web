const { Router } = require('express');
const express = require('express');
//variable qui permet d'utiliser 


const router = express.Router();

router.get('/', function (req,res){
    res.render('/index')
 });


 module.exports = router;