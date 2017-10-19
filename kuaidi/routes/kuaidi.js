var express = require('express');
var router = express.Router();
var http = require("axios")

/* GET users listing. */
router.get('/', function(req, res, next) {
  var text = req.query.text;
  http.get("http://www.kuaidi100.com/autonumber/autoComNum?text="+text)
  .then(function(data){
    res.json(data.data.auto);
  })
});

router.get('/info', function(req, res, next) {
  var text = req.query.text;
  http.get("http://www.kuaidi100.com/query?type="+req.query.type+"&postid="+text)
  .then(function(data){
    res.json(data.data.data);
  })
});

module.exports = router;
