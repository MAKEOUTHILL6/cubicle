const { Cube } = require('../models/Cube');

// MULTIPLE RELATIONS SEARCH DEEP POPULATE 
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');