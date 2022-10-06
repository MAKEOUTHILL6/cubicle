const router = require('express').Router();


router.get('/create-accessory', (req, res) => {

    res.render('createAccessory');
});



module.exports = router;