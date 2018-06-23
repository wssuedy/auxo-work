const Router = require('express').Router;

const router = Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.dbs.Message.find({}, function(err, messages) {
    res.send(messages);
  })
});

/* GET user by ID. */
router.get('/:id', function(req, res, next) {
  req.dbs.Message.findOne({
    id: req.params.id
  }, function(err, message) {
    res.send(message);
  })
});

module.exports = router;