exports.errorHandler = (err, req, res, next) => {
    res.render('/not-found', {error: err.message});
};