import { gql } from '@apollo/client';

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