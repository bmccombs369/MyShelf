const Schema = require('mongoose').Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    director: String,
    writer: String,
    releaseYear: Number,
    synopsis: String,
    userRating: Number,
    coverImgUrl: String
});

module.exports = movieSchema;