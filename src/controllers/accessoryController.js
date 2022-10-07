const router = require('express').Router();
const Accessory = require('../models/Accessory');
const {Cube} = require('../models/Cube');
const cubeService = require('../services/cubeService');


router.get('/create-accessory', (req, res) => {
    res.render('createAccessory');
});


router.post('/create-accessory', async (req, res) => {
    await Accessory.create(req.body);
    res.redirect('/');
});


router.get('/attach/:id', async (req, res) => {
    let cube = await Cube.findById(req.params.id).lean();

    // GET ALL ACCESSORIES THAT THIS CUBE DOESNT HAVE 
    let accessories = await cubeService.getAllAvailable(cube.accessories).lean()

    res.render('attachAccessory', {
        cube,
        accessories,
    });
});


router.post('/attach/:id', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id;

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);
    
    // ADDING RELATION TO CUBES 
    cube.accessories.push(accessory)
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();


    res.redirect(`/cube/details/${req.params.id}`);
})


module.exports = router;