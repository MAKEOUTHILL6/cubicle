const Accessory = require('../models/Accessory');
const { Cube } = require('../models/Cube');

// MULTIPLE RELATIONS SEARCH DEEP POPULATE 
// QUERY OPERATORS FOR MONGODB METHODS 
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

// GET ALL EXCEPT THE ONE I HAVE ON THE CUBE 
exports.getAllAvailable = (ids) => Accessory.find({_id: {$nin: ids}});

exports.edit = (id, data) => Cube.findByIdAndUpdate(id, data);
