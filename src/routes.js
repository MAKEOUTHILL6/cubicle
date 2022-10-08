const express = require('express');
const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

const router = express.Router();


router.use('/', homeController);
router.use('/cube', createController);
router.use('/accessory', accessoryController);
router.use('/auth', authController);

module.exports = router;