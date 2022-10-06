const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27023/softuniCubicle';

exports.initializeDatabase = () => mongoose.connect(connectionString);