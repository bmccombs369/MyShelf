const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');

router.get('/new', (req, res) => {
  const usersId = req.params.usersId;
  const catalogsId = req.params.catalogsId;
  User.findById(usersId)
    .then((user) => {
      const catalog = user.catalogs.id(catalogsId);
      res.render('movies/new', {
        user: user,
        movies: movies
      });
    });
});

module.exports = router;