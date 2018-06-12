const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  User.findById(req.params.usersId)
    .then(Catalog.findById(req.params.catalogsId))
    .then((user) => {
      const movies = user.catalog.movies
      res.render('movies/index', {
        user: user,
        movies: movies
      })
    })
})