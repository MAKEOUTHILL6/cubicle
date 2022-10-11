const {isEmail} = require('../utils/validators');

exports.isEmail = (req, res, next) => {
    if(!isEmail(req.body.username)){
        return res.redirect('/not-found');
    };

    next();
};