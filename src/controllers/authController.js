const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', async (req, res) => {
   let createdUser = await authService.register(req.body);

   console.log(createdUser);

    res.redirect('/');
});


router.get('/login', (req, res) => {

    res.render('loginPage');
});


router.post('/login', (req, res) => {

});


module.exports = router;