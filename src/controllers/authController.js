const router = require('express').Router();
const authService = require('../services/authService');
const { sessionName } = require('../config/appConfig');
const { isEmail } = require('../middlewares/validatorMiddleware');
// const {isEmail} = require('../utils/validators');

router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', isEmail, async (req, res, next) => {

    if(!isEmail(req.body.username)){   
        next({message: 'Invalid email'});
    };   

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
    try {
        let result = await authService.login(req.body);

        if (result) {
            res.cookie(sessionName, result, { httpOnly: true });
            res.redirect('/')
        } else {
            res.redirect('/not-found')
        };

    } catch (error) {
        res.status(400).res.render('loginPage', {
            error: error.message,
        });
    }
});


router.get('/logout', (req, res) => {
    res.clearCookie(sessionName);

    res.redirect('/');
})


module.exports = router;