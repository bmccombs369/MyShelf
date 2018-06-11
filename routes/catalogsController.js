const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');

router.get('/', (req, res) => {
    User.findById(req.params.usersId)
        .then((user) => {
            const catalogs = user.catalogs
            res.render('catalogs/index', {
                catalogs: catalogs
            });
        });
});

router.get('/new', (req, res) => {
    res.render('catalogs/new', {
        userId: req.params.usersId
    })
})
router.post('/', (req, res) => {
    const newCatalog = new Catalog(req.body);
    User.findById(req.params.userId)
        .then((user) => {
            user.catalogs.push(catalog);
            return user.save()
                .then(() => {
                    res.redirect(`/users/${req.params.usersId}/catalogs`);
                })
        })
})

router.delete('/:catalogsid', (req,res) => {
    
})


module.exports = router;