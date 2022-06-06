const { Router } = require('express');
const express = require('express');
const app = express();
//variable qui permet d'utiliser 


const router = express.Router();

router.get('/', async function (req,res){
    await res.render('/index')
 });


 module.exports = router;