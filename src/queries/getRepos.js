import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query repositories($query: String!, $after: String) {
    search(query:$query, type:REPOSITORY, first:12, after:$after) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            issues {totalCount}
            pullRequests {totalCount}
            id
            nameWithOwner
            description
            stargazerCount
            primaryLanguage {
              color
              name
            }
            languages(first:100) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
