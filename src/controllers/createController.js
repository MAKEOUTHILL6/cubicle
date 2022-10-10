const router = require('express').Router();
const { Cube } = require('../models/Cube');
const cubeService = require('../services/cubeService');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const cube = req.body;
    cube.owner = req.user._id;
    await Cube.create(cube);

    res.redirect('/');
});


router.get('/details/:id', async (req, res) => {

    const currentCubeId = req.params.id;
    // GET THE CUBE AND HIS ACCESSORIES RELATIONS IN THE SERVICE OR YOU CAN CHAIN THE POPULATE
    let cube = await cubeService.getOne(currentCubeId).lean();

    const isOwner = cube.owner == req.user?._id;

    res.render('details', {
        cube,
        isOwner,
    });
});


router.get('/edit/:id', isAuth, async (req, res) => {
    let cube = await Cube.findById(req.params.id).lean();

    if (cube.owner != req.user._id) {
        return res.redirect('/not-found');
    };

    cube[`difficultyLevel${cube.difficultyLevel}`] = true;

    res.render('editCubePage', { cube });
});


router.post('/edit/:id', isAuth, async (req, res) => {

    await cubeService.edit(req.params.id, req.body);

    res.redirect(`/cube/details/${req.params.id}`);
});


router.get('/delete/:id', async (req, res) => {

    let cube = await Cube.findById(req.params.id).lean();

    cube[`difficultyLevel${cube.difficultyLevel}`] = true;

    res.render('deleteCubePage', { cube });
});


router.post('/delete/:id', async (req, res) => {

    await Cube.findByIdAndDelete(req.params.id);

    res.redirect('/');
});

module.exports = router;