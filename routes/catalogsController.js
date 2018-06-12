const router = require('express').Router({ mergeParams: true });
const User = require('../models/User');
const Catalog = require('../models/Catalog');

router.get('/', (req, res) => {
    User.findById(req.params.usersId)
        .then((user) => {
            const catalogs = user.catalogs
            res.render('catalogs/index', {
                user: user,
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
            user.catalogs.push(newCatalog);
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.usersId}/catalogs`);
        });
});

router.get('/:catalogsId', (req, res) => {
    Catalog.findById(req.params.catalogsId)
        .then((catalog) => {
            res.render('catalogs/show', {
                catalog: catalog
            });
        });
});

router.delete('/:catalogsId', (req, res) => {
    Catalog.findByIdAndRemove(req.params.catalogsId)
        .then(() => {
            console.log('Successfully Deleted');
            res.redirect(`/users/${req.params.usersId}/catalogs`);
        });
})


module.exports = router;