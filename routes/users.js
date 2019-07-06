var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.many('select * from nvk_users where true;')
  .then(function (data) {
    res.send(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
});

router.get('/:id', function(req, res, next) {
  db.one(`select * from nvk_users where user_id='${req.params.id}'`)
  .then(function (data) {
    res.send(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
});




module.exports = router;
