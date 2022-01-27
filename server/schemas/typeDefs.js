const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    userName: String!
    authored: [String]
  }
  type Auth {
    user: Profile
    token: ID
  }

  type Recipe {
    _id: ID
    name: String
    image: Buffer
    description: String
    author: String
    ingredients: [String]
    instructions: String
    likes: Int
    date: Timestamp
  }

  type Query {
    profiles: [Profile]
    profile(userName: String!): Profile
    recipes: [Recipe]
    myRecipes(recipes: ID, author: ID!): [Recipe]
    me: Profile
  }

  type Mutation {
    addProfile(userName: String!, password: String!): Auth
    login(userName: String!, password: String!): Auth
    addRecipe(profileId: ID!, authored: String!): Profile
    createRecipe(name: String!, image: String, description: String!, author: String!, ingredients: String!, instructions: String!): Recipe
  }
`;

module.exports = typeDefs;
