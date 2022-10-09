const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', async (req, res) => {

    let createdUser = await authService.register(req.body);

    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        res.redirect('/not-found')
    }

});


router.get('/login', (req, res) => {

    res.render('loginPage');
});


router.post('/login', async (req, res) => {
    let result = await authService.login(req.body);

    if(result){
        res.cookie('session', result);
        res.redirect('/')
    } else {
        res.redirect('/not-found')
    };

});


module.exports = router;