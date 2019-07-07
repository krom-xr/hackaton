var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/p_road', function(req, res, next) {
  let sword = req.query.search_word;
  const filter = req.query.ftype;

  if (filter !== 'all' && !sword)
    sword = '%';



  let sql = `
    select pr_id, pr_name, count (case when ptp_id ='hole' then 1 end) count_hole,
      count (case when position('dtp' in ptp_id) > 0 then 1 end) count_dtp,
      count (case when ptp_id ='markup_none' then 1 end) count_markup_none,
      count (case when ptp_id ='markup_bad' then 1 end) count_markup_bad,
      count (case when ptp_id ='track' then 1 end) count_track,
      count (case when ptp_id <> 'none' then 1 end) count_all
      from p_road left join p_problems on pr_id=pp_road_id
      left join p_type_problems on pp_type_prob_id = ptp_id
      where position(upper('${sword}') in trim(upper(pr_name)) ) > 0
      group by pr_id, pr_name`;

  if (filter === 'no-problems')
    sql = `
      select pr_id,
        pr_name,
        0 count_hole,
        0 count_dtp,
        0 count_markup_none,
        0 count_markup_bad,
        0 count_track,
        0 count_all
        from p_road
        where not exists (select 'x' from p_problems where pp_road_id=pr_id)
        and (('%' <> '%' and position(upper('${sword}') in trim(upper(pr_name)) ) > 0)
        or '%' ='%')
        group by pr_id,
        pr_name,
        count_hole,
        count_dtp,
        count_markup_none,
        count_markup_bad,
        count_track
        order by 8`;

  else if (filter === 'with-problems')
    sql = `
      select pr_id, pr_name, count (case when ptp_id ='hole' then 1 end) count_hole,
        count (case when position('dtp' in ptp_id) > 0 then 1 end) count_dtp,
        count (case when ptp_id ='markup_none' then 1 end) count_markup_none,
        count (case when ptp_id ='markup_bad' then 1 end) count_markup_bad,
        count (case when ptp_id ='track' then 1 end) count_track,
        count (case when ptp_id <>'none' then 1 end) count_all
        from p_road ,
        p_problems left join p_type_problems on pp_type_prob_id = ptp_id
        where pr_id=pp_road_id
        and (('%' <> '%' and position(upper('${sword}') in trim(upper(pr_name)) ) > 0)
        or '%' ='%'
        )
        group by pr_id, pr_name
        order by 8`;

  else  if (filter !== 'all')
    sql = `
      select pr_id, pr_name, count (case when ptp_id ='hole' then 1 end) count_hole,
        count (case when position('dtp' in ptp_id) > 0 then 1 end) count_dtp,
        count (case when ptp_id ='markup_none' then 1 end) count_markup_none,
        count (case when ptp_id ='markup_bad' then 1 end) count_markup_bad,
        count (case when ptp_id ='track' then 1 end) count_track,
        count (case when ptp_id <>'none' then 1 end) count_all
        from p_road ,
        p_problems left join p_type_problems on pp_type_prob_id = ptp_id
        where pr_id=pp_road_id
        and (('%' <> '%' and position(upper('${sword}') in trim(upper(pr_name)) ) > 0)
        or '%' ='%'
        ) and position('${filter}' in ptp_id) > 0
        group by pr_id, pr_name
        order by 8`;




  console.log(filter, sword);
  console.log('sql - ', sql);

  db.query(sql)
  .then(function (data) {
    res.send(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
});

router.get('/p_road/:id', function(req, res, next) {
  console.log('abcdef - ', req.params.id);
  const sql = `select * from p_road where pr_id=${req.params.id};`;
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
  let sql = '';
  if (req.query.road_id && req.query.road_id !== 'undefined') {
    sql = `select * from p_problems
            left join p_type_problems on pp_type_prob_id=ptp_id
            where pp_road_id = ${req.query.road_id}`;
  }
  else {
    sql = `
      select * from p_problems
        left join p_type_problems on pp_type_prob_id=ptp_id`;
  }




  db.query(sql)
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
