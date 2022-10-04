exports.index = (req, res) => {
    res.render('index', {
        cubes: req.cubes,
    });
};

exports.about = (req, res) => {
    res.render('about');
};

