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
    req.cubes.push(cube);

    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(req.cubes, '', 4), {encoding: 'utf-8'})
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })

});

module.exports = router;