import { gql } from "@apollo/client";

<<<<<<< HEAD
export const QUERY_RECIPES = gql`
  query allRecipes {
      recipes {
        _id
        name
        image
        description
        author
        ingredients
        instructions
        likes
=======
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
>>>>>>> ce1c0894babea678a89f33ad543ab1fbc0c9d561
    }
  }
`;
