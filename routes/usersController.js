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

router.get('/:usersId', (req, res) => {
  User.findById(req.params.usersId)
    .then((user) => {
      res.render('users/show', {
        user: user
      });
    });
});

router.get('/:usersId/edit', (req, res) => {
  User.findById(req.params.usersId)
    .then((users) => {
      res.render('users/edit', {
        users: users
      });
    });
});
router.patch('/:usersId', (req, res) => {
  User.findByIdAndUpdate(req.params.usersId, req.body, {new: true})
  .then(() => {
    res.redirect(`/users/${req.params.usersId}`);
  });
});

router.delete('/:usersId', (req, res) => {
  User.findByIdAndRemove(req.params.usersId)
  .then(() => {
    console.log('Successfully Deleted');
    res.redirect('/users');
  });
});


module.exports = router;
