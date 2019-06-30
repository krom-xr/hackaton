const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://hakaton:H@k@t0N@box.zillent.ru:5432/Hakaton');


module.exports = db;



