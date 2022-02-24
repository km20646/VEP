var express = require('express');
var router = express.Router();
var movies = require('../src/movies.json');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(movies);
});

module.exports = router;