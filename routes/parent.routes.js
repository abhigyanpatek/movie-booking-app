const movieRouter = require('./movie.routes');
const theatreRouter = require('./theatre.routes');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

module.exports = (app) => {
    app.use("/mba/api/v1/movies", movieRouter);
    app.use("/mba/api/v1/theatres", theatreRouter);
    app.use("/mba/api/v1/auth", authRouter);
    app.use("/mba/api/v1/users", userRouter);
}