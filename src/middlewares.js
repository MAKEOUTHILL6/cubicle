const cubes = require('./db.json');

exports.cubesMiddleware = (req, res, next) => {
    req.cubes = cubes;

    next();
}