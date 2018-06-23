var express = require('express');
var router = express.Router();

router.get("/topics", function(req, res) {
  req.dbs.Topic.find({}, function(err, topics) {
    res.send(topics);
  })
})


module.exports = router;