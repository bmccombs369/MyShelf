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

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', {
        user: user
      });
    });
});

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      res.render('users/edit', {
        users: users
      });
    });
});
router.patch('/:id', (req, res) => {
  Homework.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(() => {
    res.redirect(`/users/${req.params.id}`);
  });
});

router.delete('/:id', (req, res) => {
  Homework.findByIdAndRemove(req.params.id)
  .then(() => {
    console.log('Successfully Deleted');
    res.redirect('/homework');
  });
});


module.exports = router;
