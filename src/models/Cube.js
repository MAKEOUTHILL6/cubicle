const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 150,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,

    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    // ADD ACCESSORY RELATION (ONE CUBE TO MANY ACCESSORIES)
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ],
});


cubeSchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http' || 'https');
}, `Image URL should start with https or http`);


const Cube = mongoose.model("Cube", cubeSchema);


exports.Cube = Cube;