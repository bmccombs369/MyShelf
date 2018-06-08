const mongoose = require('mongoose');
const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Movie = require('../models/Movie');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

User.remove({}).then(() => {
    const videodrome = new Movie({
        title: 'Videodrome',
        director: 'David Cronenberg',
        writer: 'David Cronenberg',
        releaseYear: 1983,
        synopsis: 'When he acquires a different kind of show for his station, a sleazy cable-TV programmer begins to see his life and the future of media spin out of control in a terrifying new reality.',
        coverImgUrl: 'https://www.movieposter.com/posters/archive/main/201/MPW-100686'
    });

    const hereditary = new Movie({
        title: 'Hereditary',
        director: 'Ari Aster',
        writer: 'Ari Aster',
        releaseYear: 2018,
        synopsis: "When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
        coverImgUrl: 'https://cdn.flickeringmyth.com/wp-content/uploads/2018/01/Hereditary-poster-600x889.jpg'
    });

    const bottleRocket = new Movie({
        title: 'Bottle Rocket',
        director: 'Wes Anderson',
        writer: 'Wes Anderson & Owen Wilson',
        releaseYear: 1996,
        synopsis: "Three friends plan to pull off a simple robbery and go on the run.",
        coverImgUrl: 'http://img.moviepostershop.com/bottle-rocket-movie-poster-1996-1020196344.jpg'
    });

    const homeAlone = new Movie({
        title: 'Home Alone',
        director: 'Chris Columbus',
        writer: 'John Hughes',
        releaseYear: 1990,
        synopsis: 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.',
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1T%2BlZ6iUZL._SY445_.jpg'
    });

    const eightHalf = new Movie({
        title: '8 1/2',
        director: 'Federico Fellini',
        writer: 'Federico Fellini, Tullio Pinelli, Ennio Flaiano & Brunello Rondi',
        releaseYear: 1963,
        synopsis: 'A harried movie director retreats into his memories and fantasies.',
        coverImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51dsdzUbJ%2BL.jpg'
    });

    const barryLyndon = new Movie({
        title: 'Barry Lyndon',
        director: 'Stanley Kubrick',
        writer: 'Stanley Kubrick & William Makepeace Thackeray',
        releaseYear: 1975,
        synopsis: "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.",
        coverImgUrl: 'https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg'
    });

    const faveMovies = new Catalog({
        name: 'My Favorite Movies',
        movies: [videodrome, bottleRocket, homeAlone]
    });

    const moviesToSee = new Catalog({
        name: 'Movies I Want to See',
        movies: [hereditary, eightHalf, barryLyndon]
    });

    const ben = new User({
        username: 'Ben',
        email: 'ben@gmail.com',
        photoUrl: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/10887387_10152426898511222_3263127469470870396_o.jpg?_nc_cat=0&oh=64badc3e717a107c71ce9936337b65e5&oe=5BC3E8B1',
        catalogs: [faveMovies, moviesToSee],
    });

    const users = [ben];

    return User.insertMany(users);
})
.then(() => {
    mongoose.connection.close();
});