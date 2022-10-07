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

router.post('/search', async (req, res) => {

    let search = req.body.search
    let from = Number(req.body.from) || 0;
    let to = Number(req.body.to) || 6;

    // WITH MONGODB 
    // let cubes = await Cube.find({name: {$regex: new RegExp(search, 'i')}, difficultyLevel: {$gt: from}, difficultyLevel: {$lt: to}}).lean();

    // WITH MONGOOSE
    let cubes = await Cube.find({name: {$regex: new RegExp(search, 'i')}})
        .where('difficultyLevel').lte(to).gte(from).lean();

    res.render('index', {
        cubes,
    });
});


module.exports = router;