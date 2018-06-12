const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  User.findById(req.params.usersId)
    .then(Catalog.findById(req.params.catalogsId))
    .then((catalog) => {
      const movies = catalog.movies
      res.render('movies/index', {
        catalog: catalog,
        movies: movies
      })
    })
})