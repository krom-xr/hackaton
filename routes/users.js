var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {



  const pgp = require('pg-promise')(/* options */)
  const db = pgp('postgres://hakaton:H@k@t0N@box.zillent.ru:5432/Hakaton')



  db.many('select * from nvk_users where true;')
  .then(function (data) {
    //console.log('DATA:  asd2 asdf<D-[>', data)
    //
    //res.send(data);
    //
    //asdf

    res.send('abcdef     12343214213');
  })

  .catch(function (error) {
    console.log('ERROR:', error)
  })




});


module.exports = router;
