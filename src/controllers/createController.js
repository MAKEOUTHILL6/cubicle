const router = require('express').Router();
const fs = require('node:fs/promises');
const path = require('path');
const {Cube} = require('../models/Cube');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    let cube = await Cube.create(req.body);
    res.redirect('/');
});


router.get('/details/:id', async (req, res) => {
    const currentCubeId = req.params.id;
    let cube = await Cube.findById(currentCubeId).lean();

    console.log(cube);
    res.render('details', {
        cube,
    });
})

module.exports = router;