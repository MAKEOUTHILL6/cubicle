const router = require('express').Router();
const Accessory = require('../models/Accessory');

router.get('/create-accessory', (req, res) => {
    res.render('createAccessory');
});


router.post('/create-accessory', async (req, res) => {
    await Accessory.create(req.body);
    res.redirect('/');
});




module.exports = router;