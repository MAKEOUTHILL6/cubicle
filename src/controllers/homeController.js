const router = require('express').Router();
const {Cube} = require('../models/Cube');

router.get('/', async (req, res) => {
    let cubes = await Cube.find().lean();
    res.render('index', {
        cubes
    });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/search', (req, res) => {
    let currentSearch = req.body;
    let searchedCubeName = currentSearch.search;
    let searchedCubeDiffFrom = currentSearch.from;
    let searchedCubeDiffTo = currentSearch.to;
    let cubesArray = req.cubes;

    let searchedCubes = cubesArray
    .filter(x => x.name.startsWith(searchedCubeName))
    .filter(x => x.difficulty >= searchedCubeDiffFrom)
    .filter(x => x.difficulty <= searchedCubeDiffTo);
    
    res.render('index', {
        cubes: searchedCubes,
    });
});


module.exports = router;