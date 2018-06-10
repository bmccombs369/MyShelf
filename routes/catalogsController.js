const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');

router.get('/', (req, res) => {
    User.findById(req.params.userid)
        .then((user) => {
            const catalogs = user.catalogs
            res.render('catalogs/index', {
                catalogs: catalogs
            });
        });
});

// router.get('/new', (req, res) => {
//     res.render('catalogs/new', {
//         userId: req.params.userId
//     })
// })
// router.post('/', (req, res) => {

// })


module.exports = router;