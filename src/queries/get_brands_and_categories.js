import { gql } from '@apollo/client';

const GET_BRANDS_AND_CATEGORIES = gql`
  query GetBrandsAndCategories {
    site {
      brands {
        edges {
          node {
            name
            path
          }
        }
      }
      categoryTree {
        name
        path
      }
    }
  }
`;

export default GET_BRANDS_AND_CATEGORIES;
