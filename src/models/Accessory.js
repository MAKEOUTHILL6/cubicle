const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(){
        //         return this.imageUrl.startsWith('https')
        //     },
        //     message: 'Image url should...'
        // }
    },
    description: {
        type: String,
        required: true,
        maxLength: 150,
    },

    // ADD REFERENCE TO CUBES MODEL (ONE ACCESSORY TO ONE CUBE)
    // cube: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Cube'
    // },


    // (ONE ACCESSORY TO MANY CUBES)
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cube'
        },
    ]
    
});

accessorySchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http' || 'https');
}, `Image URL should start with https or http`);


const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;