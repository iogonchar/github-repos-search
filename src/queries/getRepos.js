import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query {
    search(query:"mesto", type:REPOSITORY, first:10) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            id
            nameWithOwner
            description
            stargazerCount
            primaryLanguage {
              color
              name
            }
          }
        }
      }
    }
  }
`;
