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
    User.findById(req.params.usersId)
        .then((user) => {
            user.catalogs.push(newCatalog);
            return user.save();
        })
        .then(() => {
            res.redirect(`/users/${req.params.usersId}/catalogs`);
        });
});

// router.get('/:catalogsId', (req, res) => {
//     Catalog.findById(req.params.catalogsId)
//         .then((catalog) => {
//             res.render('catalogs/show', {
//                 catalog: catalog
//             });
//         });
// });

router.get('/:catalogsId', (req, res) => {
    const usersId = req.params.usersId;
    const catalogsId = req.params.catalogsId;
    User.findById(usersId)
        .then((user) => {
            const catalog = user.catalogs.id(catalogsId);
            res.render('catalogs/show', {
                usersId: usersId,
                catalog: catalog
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete('/:catalogsId', (req, res) => {
    const catalogsId = req.params.catalogsId
    const usersId = req.params.usersId
    User.findById(usersId)
        .then((user) => {
            user.catalogs.id(catalogsId).remove();
            return user.save();
        })
        .then(() => {
            console.log('Successfully Deleted');
            res.redirect(`/users/${usersId}/catalogs`);
        })
        .catch((err) => {
            console.log(err);
        });
})


module.exports = router;