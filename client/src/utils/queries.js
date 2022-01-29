import { gql } from '@apollo/client';

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
    }
  }
`;