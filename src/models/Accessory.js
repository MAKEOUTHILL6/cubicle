const mongoose = require('mongoose');
 
const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 150,
    },

    // ADD REFERENCE TO CUBES MODEL

});


accessorySchema.path('imageUrl').validate(function(){
    return this.imageUrl.startsWith('http' || 'https');
}, `Image URL should start with https or http`);


const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;