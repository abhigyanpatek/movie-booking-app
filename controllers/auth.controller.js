const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serverConfig = require('../configs/server.config');

const signup = async (req, res) => {
    try {
        const data = await User.findOne({email: req.body.email});
        if(data){
            return res.status(409).send({
                message: "Failed! User already exists!"
            });
        }

        let userStatus = "APPROVED";
        if(req.body.userType !== "CUSTOMER"){
            userStatus = "PENDING";
        }
        const userObject = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            userType: req.body.userType,
            userStatus: userStatus
        }

        const user = await User.create(userObject);
        const postResponse = {
            name: user.name,
            id: user._id,
            email: user.email,
            userType: user.userType,
            userStatus: user.userStatus
        }
        res.status(201).send(postResponse);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Error occured in processing request. Please try again after sometime!"
        });
    }
}

const signin = async (req, res) => {
    const queryObject = {};
    if(req.body.email){
        queryObject.email = req.body.email;
    }
    if(req.body.id){
        queryObject._id = req.body.id;
    }
    try {
        const user = await User.findOne(queryObject);
        if(!user){
            return res.status(404).send({
                message: "Failed! User doesn't exists!"
            });
        }
        if(user.userStatus !== "APPROVED"){
            return res.status(200).send({
                message: `Can't allow login as your status is ${user.userStatus}`
            });
        }

        const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!isValidPassword){
            return res.sendStatus(401);
        }
        const token = jwt.sign({id: user._id, role: user.userType}, serverConfig.SECRET, {
            expiresIn: 86400
        });

        const postResponse = {
            name: user.name,
            id: user.id,
            email: user.email,
            userType: user.userType,
            userStatus: user.userStatus,
            accessToken: token
        }
        res.status(200).send(postResponse);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Error occured in processing request. Please try again after sometime!"
        });
    }
}

module.exports = {
    signup,
    signin
}