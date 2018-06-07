const Schema = require('mongoose').Schema;
const catalogSchema = require('./catalogSchema');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    photoUrl: String,
    catalogs: [catalogSchema],
    favoriteMovieQuote: String
});

module.exports = userSchema;