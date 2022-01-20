const db = require('../config/connection');
const { Profile, Recipe } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const recipeSeeds = require('./recipeSeeds.json');

db.once('open', async () => {
    try {
        await Profile.deleteMany({});
        await Recipe.deleteMany({});

        await Profile.create(profileSeeds);
        await Recipe.create(recipeSeeds);
        console.log('seeds planted')
        process.exit(0);
    } catch (err) {
        throw err;
    }
});