const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { sessionName, secret } = require('../config/appConfig');

const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {

    let token = req.cookies[sessionName];

    if (token) {
        try {
            let decodedToken = await jwtVerify(token, secret);

            // MIDDLEWARE TO USE THE USER TOKEN EVERYWHERE 
            req.user = decodedToken;
        }
        catch(err) {
            console.log(err);
            res.redirect('/not-found');
        }

    }

    next();
};


exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/not-found');
    }

    next();
};