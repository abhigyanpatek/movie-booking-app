const Movie = require('../models/movie.model');

const createMovie = async (req, res) => {
    const movieObject = {
        name: req.body.name,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        releaseStatus: req.body.releaseStatus,
        director: req.body.director,
        language: req.body.language,
        posterUrl: req.body.posterUrl,
        casts: req.body.casts,
        trailerUrl: req.body.trailerUrl
    }
    try{
        const movie = await Movie.create(movieObject);
        res.status(201).send(movie);
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: "Failed in creating movie. Please try again after sometime!"
        });
    }
}

const getAllMovies = async (req, res) => {
    const condition = {};
    if(req.query.name){
        condition.name = req.query.name;
    }
    try{
        const movies = await Movie.find(condition);
        res.status(200).send(movies);
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: "Failed in fetching movies. Please try again after sometime!"
        });
    }
}

const getMovieById = async (req, res) => {
    try{
        const movie = await Movie.findOne({_id: req.params.id});
        if(!movie){
            return res.sendStatus(404);
        }
        res.status(200).send(movie);
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: "Failed in fetching movie. Please try again after sometime!"
        });
    }
}

const updateMovie = async (req, res) => {
    try{
        let savedMovie = await Movie.findOne({_id: req.params.id});
        if(!savedMovie){
            return res.status(404).send({
                message: "Movie being updated doesn't exist"
            });
        }
        savedMovie.name = req.body.name ?? savedMovie.name;
        savedMovie.description = req.body.description ?? savedMovie.description;
        savedMovie.casts = req.body.casts ?? savedMovie.casts;
        savedMovie.director = req.body.director ?? savedMovie.director;
        savedMovie.trailerUrl = req.body.trailerUrl ?? savedMovie.trailerUrl;
        savedMovie.posterUrl = req.body.posterUrl ?? savedMovie.posterUrl;
        savedMovie.language = req.body.language ?? savedMovie.language;
        savedMovie.releaseDate = req.body.releaseDate ?? savedMovie.releaseDate;
        savedMovie.releaseSatus = req.body.releaseSatus ?? savedMovie.releaseSatus;

        const updatedMovie = await savedMovie.save();
        res.status(200).send(updatedMovie);
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: "Failed in updating movie. Please try again after sometime!"
        });
    }
}

const deleteMovie = async (req, res) => {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if(!movie){
            return res.status(404).send({
                message: "Movie being deleted doesn't exist"
            });
        }
        res.status(200).send({
            message: `Successfully deleted movie ${movie.name}`
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message: "Failed in deletion. Please try again after sometime!"
        });
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}