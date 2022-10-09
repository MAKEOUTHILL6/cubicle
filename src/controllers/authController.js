const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', async (req, res) => {

    let createdUser = await authService.register(req.body);

    console.log(createdUser);

    if (createdUser) {
        res.redirect('/login');
    } else {
        res.redirect('/not-found')
    }

});


router.get('/login', (req, res) => {

    res.render('loginPage');
});


router.post('/login', (req, res) => {

});


module.exports = router;