var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/p_road', function(req, res, next) {
  const sword = req.query.search_word;

  const sql = `
  select * from p_road
    where position(upper('${sword}') in trim(upper(pr_name)) ) > 0`


  //select * from p_road where pr_name ilike "${sword}";`;
  console.log('sql - ', sql);

  db.query(sql)
  .then(function (data) {
    res.send(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
});

router.get('/p_type_road', function(req, res, next) {
  db.many('select * from p_type_road where true;')
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
