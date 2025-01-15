const User = require("../models/user.model");
const bcrypt = require('bcrypt');

const update = async (req, res) => {
    try {
        await User.updateOne({_id: req.id}, {
            name: req.body.name,
            password: req.body.password? bcrypt.hashSync(req.body.password, 8): undefined
        });
        res.status(200).send({
            message: "Your details updated successfully!"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Error occured in processing request. Please try again after sometime!"
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send({
                message: "User being updated doesn't exists!"
            });
        }
        await User.updateOne({_id: req.params.id}, {
            name: req.body.name,
            userType: req.body.userType,
            userStatus: req.body.userStatus
        });
        res.status(200).send({
            message: "User record updated successfully!"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Error occured in processing request. Please try again after sometime!"
        });
    }
}

module.exports = {
    update,
    updateUser
}