//Imported from week 21,Act 26, client/src/utils/mutations.js ADD_USER mutation on line 15.  This is the api call through graphql to resolvers.js in server to the addProfile mutation which is devined in the typeDefile based on the profile defined in server/models/Profile.js of our project.

import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;


export const ADD_PROFILE = gql`
  mutation addProfile($userName: String!, $password: String!) {
    addProfile(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;


export const ADD_RECIPE = gql`
  mutation addRecipe($profileId: ID, $authored: String!) {
    addRecipe(profileId: $profileID, authored: $authored) {
    _id
    userName
    authored
    }
  }
`;
//likes removed from return values as there will be no likes when recipe is created. _id and date should be created by by mongodb so they should be available to return.  
export const CREATE_RECIPE = gql`
mutation createRecipe($name:String!,$image:Buffer, $description:String!, $author: String!, $ingredients: String!, $instructions: String!) {
  _id
  name
  image
  description
  author
  ingredients
  instructions
  likes
  date
}`