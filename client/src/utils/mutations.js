//Imported from week 21,Act 26, client/src/utils/mutations.js ADD_USER mutation on line 15.  This is the api call through graphql to resolvers.js in server to the addProfile mutation which is devined in the typeDefile based on the profile defined in server/models/Profile.js of our project.

import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($userName: String!, $password: String!) {
    addProfile(userName: $userName, password: $password) {
      token
      profile {
        _id
        userName
      }
    }
  }
`;
