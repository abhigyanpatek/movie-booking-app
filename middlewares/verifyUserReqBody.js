const { userType, userStatus } = require("../utils/constants");

exports.validateUserReqBody = (req, res, next) => {
    if(!req.body){
        return res.status(400).send({
            message: "Failed! Request body is not provided!"
        });
    }
    if(!req.body.name){
        return res.status(400).send({
            message: "Failed! Name is not provided!"
        });
    }
    if(!req.body.email){
        return res.status(400).send({
            message: "Failed! Email is not provided!"
        });
    }
    if(!isValidEmail(req.body.email)){
        return res.status(400).send({
            message: "Failed! Email is not valid!"
        });
    }
    if(!req.body.password){
        return res.status(400).send({
            message: "Failed! Password is not provided!"
        });
    }
    if(!req.body.userType){
        return res.status(400).send({
            message: "Failed! Usertype is not provided!"
        });
    }
    if(!userType.includes(req.body.userType)){
        return res.status(400).send({
            message: "Failed! Usertype is invalid. Possible values CUSTOMER | CLIENT | ADMIN"
        });
    }
    next();
}

exports.validateUpdateUserReqBody = (req, res, next) => {
    if(req.body.userType && !userType.includes(req.body.userType)){
        return res.status(400).send({
            message: "Failed! Usertype is invalid. Possible values CUSTOMER | CLIENT | ADMIN"
        });
    }
    
    if(req.body.userStatus && !userStatus.includes(req.body.userStatus)){
        return res.status(400).send({
            message: "Failed! Userstatus is invalid. Possible values APPROVED | PENDING | REJECTED"
        });
    }
    next();
}

function isValidEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}