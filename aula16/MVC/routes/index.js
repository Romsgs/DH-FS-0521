var express = require('express');
var router = express.Router();
const petController = require('../controllers/petController')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', petController.index)
router.get('/pets/:id', petController.show)

module.exports = router;
