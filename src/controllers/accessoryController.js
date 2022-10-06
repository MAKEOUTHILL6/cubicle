const router = require('express').Router();
const Accessory = require('../models/Accessory');
const {Cube} = require('../models/Cube');

router.get('/create-accessory', (req, res) => {
    res.render('createAccessory');
});


router.post('/create-accessory', async (req, res) => {
    await Accessory.create(req.body);
    res.redirect('/');
});


router.get('/attach/:id', async (req, res) => {
    let cube = await Cube.findById(req.params.id).lean();
    let accessories = await Accessory.find().lean();

    res.render('attachAccessory', {
        cube,
        accessories,
    });
});


module.exports = router;