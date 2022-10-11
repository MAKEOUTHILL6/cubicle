const validator = require('validator');


exports.isEmail = (email) => validator.isEmail(email);
