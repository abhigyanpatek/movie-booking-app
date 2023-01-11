const movieRouter = require('./movie.routes');

module.exports = (app) => {
    app.use("/mba/api/v1/movies", movieRouter);
}