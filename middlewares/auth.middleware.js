const jwt = require('jsonwebtoken');
const { SECRET } = require('../configs/server.config');

exports.verifyToken = (req, res, next) => {
    if(!req.headers['authorization']){
        return res.status(401).send({
            message: "No token provided!"
        });
    }
    const accessToken = req.headers['authorization'].split(' ')[1];
    jwt.verify(accessToken, SECRET, (err, payload) => {
        if(err){
            return res.sendStatus(401);
        }
        req.id = payload.id;
        req.role = payload.role;
        next();
    });
}

exports.isAdmin = (req, res, next) => {
    if(req.role !== "ADMIN"){
        return res.status(403).send({
            message: "Require Admin role!"
        });
    }
    next();
}