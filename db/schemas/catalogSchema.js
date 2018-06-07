const Schema = require('mongoose').Schema;
const movieSchema = require('./movieSchema');

const catalogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    movies: [movieSchema]
});

module.exports = catalogSchema;