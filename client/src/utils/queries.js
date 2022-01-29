import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query profile($userName: String!) {
    profile(userName: $userName) {
      _id
      userName
      authored {
        _id
        name
        date
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query getRecipes($recipe: ID) {
    recipes(recipe: $recipe) {
      _id
      name
      image
      description
      author
      ingredients
      instructions
      likes
      date
    }
  }
`;
