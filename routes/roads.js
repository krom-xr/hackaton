var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/p_road', function(req, res, next) {
  const sword = req.query.search_word;

  const sql = `
    select pr_id, pr_name, count (case when ptp_id ='hole' then 1 end) count_hole,
      count (case when ptp_id ='dtp' then 1 end) count_dtp,
      count (case when ptp_id ='markup_none' then 1 end) count_markup_none,
      count (case when ptp_id ='markup_bad' then 1 end) count_markup_bad,
      count (case when ptp_id ='track' then 1 end) count_track,
      count (case when ptp_id <> 'none' then 1 end) count_all
      from p_road left join p_problems on pr_id=pp_road_id
      left join p_type_problems on pp_type_prob_id = ptp_id
      where position(upper('${sword}') in trim(upper(pr_name)) ) > 0
      group by pr_id, pr_name`


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

router.get('/p_problems', function(req, res, next) {
  db.query(`select * from p_problems
            left join p_type_problems on pp_type_prob_id=ptp_id`)

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
