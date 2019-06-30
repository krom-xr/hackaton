var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {


  db.many('select * from nvk_users where true;')
  .then(function (data) {
    //console.log('DATA:  asd2 asdf<D-[>', data)
    //
    res.send(data);
    //
    //asdf

    //res.send('abcdef     12343214213');
  })

  .catch(function (error) {
    console.log('ERROR:', error)
  })




});


module.exports = router;
