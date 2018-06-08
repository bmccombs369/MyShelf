var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', (req, res) => {
  User
  .find({})
  .then((users) => {
    res.render('users/index', {
      users: users
    })
  })
  .catch((err) => res.send(err));
});

module.exports = router;
