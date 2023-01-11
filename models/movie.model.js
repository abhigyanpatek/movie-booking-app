const mongoose = require('mongoose');
const { releaseStatus } = require('../utils/constants');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    releaseDate: {
        type: Date,
        required: true
    },
    releaseStatus: {
        type: String,
        enum: releaseStatus,
    },
    director: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
    },
    casts: {
        type: [String],
    },
    trailerUrl: {
        type: String,
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("Movie", movieSchema);