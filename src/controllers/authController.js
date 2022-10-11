const router = require('express').Router();
const authService = require('../services/authService');
const {sessionName} = require('../config/appConfig');
const { isEmail } = require('../middlewares/validatorMiddleware');
// const {isEmail} = require('../utils/validators');

router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', isEmail, async (req, res) => {

    // if(!isEmail(req.body.username)){   
    //     return res.redirect('/not-found');
    // };   

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
        res.cookie(sessionName, result, {httpOnly: true});
        res.redirect('/')
    } else {
        res.redirect('/not-found')
    };

});


router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);

    res.redirect('/');
})


module.exports = router;