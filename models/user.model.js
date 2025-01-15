const mongoose = require('mongoose');
const { userStatus, userType } = require('../utils/constants');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: userType
    },
    userStatus: {
        type: String,
        enum: userStatus
    }
}, {timestamps: true});

module.exports = new mongoose.model("User", userSchema);