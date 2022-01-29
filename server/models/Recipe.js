const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        trim: true,
    },
    ingredients: [
        {
            type: String,
            trim: true,
        },
    ],
    instructions: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;