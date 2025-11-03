const Movie = require("../models/movie");


module.exports.list = (req, res)=>{
    Movie.find()
        .sort({title: 'asc'})
        .then(movies => {
            res.render('pages/moviesList', {movies});
        })
        .catch(error => res.status(400).send(error));
}


