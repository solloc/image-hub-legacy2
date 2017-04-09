var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('./public/dist/index', { title: 'Express' });
    res.sendfile('./public/dist/index.html');
});

module.exports = router;
