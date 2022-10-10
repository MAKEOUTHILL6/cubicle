const router = require('express').Router();
const {Cube} = require('../models/Cube');
const cubeService = require('../services/cubeService');


router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    let cube = await Cube.create(req.body);
    res.redirect('/');
});


router.get('/details/:id', async (req, res) => {

    const currentCubeId = req.params.id;
    // GET THE CUBE AND HIS ACCESSORIES RELATIONS IN THE SERVICE OR YOU CAN CHAIN THE POPULATE
    let cube = await cubeService.getOne(currentCubeId).lean();

    res.render('details', {
        cube,
    });
});


router.get('/edit/:id', async (req, res) => {
    let cube = await Cube.findById(req.params.id).lean();

    cube[`difficultyLevel${cube.difficultyLevel}`] = true;

    res.render('editCubePage', { cube });
});


router.post('/edit/:id', async (req, res) => {

    await cubeService.edit(req.params.id, req.body);

    res.redirect(`/cube/details/${req.params.id}`);
})

module.exports = router;