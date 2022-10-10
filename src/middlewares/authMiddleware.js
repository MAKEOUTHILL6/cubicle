

exports.auth = (req, res, next) => {

    let token = req.cookies['session'];

    console.log(token);

    next();
}