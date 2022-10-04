const router = require('express').Router();
const fs = require('node:fs/promises');
const path = require('path');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let cube = req.body;

    // VALIDATE

    // SAVE DATA
    req.cubes.push({id: req.cubes[req.cubes.length - 1].id + 1, ...cube});

    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(req.cubes, '', 4), {encoding: 'utf-8'})
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })

});


router.get('/details/:id', (req, res) => {
    const currentCubeId = req.params.id;
    let cube = {}
    let currentCubeFilter = req.cubes.filter(x => x.id == currentCubeId).map(x => cube=x);
    res.render('details', {
        cube,
    });
})

module.exports = router;