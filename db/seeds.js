const mongoose = require('mongoose');
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
});

User.remove({}).then(() => {
    const catalog1
    const ben = new User({
        username: Ben,
        email: 'ben@gmail.com',
        photoUrl: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/10887387_10152426898511222_3263127469470870396_o.jpg?_nc_cat=0&oh=64badc3e717a107c71ce9936337b65e5&oe=5BC3E8B1',
        Îcatalogs: [catalog1],
    });
});