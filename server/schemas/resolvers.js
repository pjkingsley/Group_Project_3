const { AuthenticationError } = require("apollo-server-express");
const { Profile, Recipe } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
        profile: async (parent, args, context) => {
            
            const profile = await Profile.findOne({ _id: context.user._id }).populate('authored');
            console.log(profile);
            return profile
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
    
   //creating a profile: from week 21, activity 26, server/shemas/resolvers.js.  This should be accessable from Client/SRC/Utils/mutations.js through graphql which the mutations.js file on client side will require.

  Mutation: {
        addProfile: async (parent, { userName, password }) => {
            const profile = await Profile.create({ userName, password });
            const token = signToken(profile);
            // return { user, token };
            return { user:profile, token };
        },
        //logging in:

        login: async (parent, { userName, password }) => {
            const profile = await Profile.findOne({ userName });
            if (!profile) {
                throw new AuthenticationError('No profile with this name or password found!');
            };
            //Verify password:
            const correctPw = await profile.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('No profile with this name or password found!');
            };
            const token = signToken(profile);
            console.log(token, profile);
            return { token, user:profile};
        },
        //creating a recipe:
        createRecipe: async (parent, {name, image, discription, ingredients, instructions},context) => { if (context.user) {
            const recipe = await Recipe.create({ name, image, discription, author:context.user._id, ingredients, instructions, });

            await Profile.findOneAndUpdate(
                {_id: context.user._id},
                { $addToSet: {authored:recipe.author }}
            );
           
            return recipe;
           
        }
        throw new AuthenticationError("You need to be logged in to create a recipe.");
        },

        //editing a recipe:
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
