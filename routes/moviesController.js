const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  Catalog.findById(req.params.usersId)
    .then((catalog) => {
      const movies = catalog.movies
      res.render('movies/index', {
        catalog: catalog,
        movies: movies
      })
    })
})