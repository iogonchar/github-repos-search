import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query getRepos($query: String!, $after: String) {
    search(query:$query, type:REPOSITORY, first:10, after:$after) {
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
