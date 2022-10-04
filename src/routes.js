const express = require('express');
const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about);

router.use('/cube', createController);

module.exports = router;