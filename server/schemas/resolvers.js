const { AuthenticationError } = require('apollo-server-express');
const { Profile, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        recipes: async () => {
            return Recipe.find();
        },
        myRecipes: async (parent, args, context) => {
            if (context.user) {
                return Recipe.find({ authored: context.userName })
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addProfile: async (parent, { userName, password }) => {
            const profile = await Profile.create({ userName, password });
            const token = signToken(profile);
        },
        login: async (parent, { userName, password }) => {
            const profile = await Profile.findOne({ userName });
            if (!profile) {
                throw new AuthenticationError('No profile with this name found!');
            };
            const correctPw = await profile.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('No profile with this name found!');
            };
            const token = signToken(profile);
            return {token, profile };
        },
        createRecipe: async (parent, {name, image, discription, author, ingredients, instructions}) => {
            const recipe = await Recipe.create({ name, image, discription, author, ingredients, instructions });
            return { recipe }
        },
        addRecipe: async (parent, { profileId, recipe }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                      $addToSet: { authored: recipe },
                    },
                    {
                      new: true,
                      runValidators: true,
                    }
                );
            };
            throw new AuthenticationError('You need to be logged in!');
        },
    }
};
module.exports = resolvers;