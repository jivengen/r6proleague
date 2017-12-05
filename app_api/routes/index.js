var express = require('express');
var router = express.Router();
var ctrlTeamData = require('../controllers/year2s3Controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/y2s3/:team', ctrlTeamData.findTeam);

module.exports = router;
