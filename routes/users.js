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

router.get('/new', (req, res) => {
  res.render('users/new')
});
router.post('/', (req, res) => {
  const newUser = req.body;
  User.create(newUser)
    .then(() => {
      res.redirect('/users');
    });
});


module.exports = router;
