const router = require('express').Router();


router.get('/register', (req, res) => {

    res.render('registerPage');
});

router.post('/register', (req, res) => {

});


router.get('/login', (req, res) => {

    res.render('loginPage');
});


router.post('/login', (req, res) => {

});




module.exports = router;