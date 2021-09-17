import { gql } from '@apollo/client';

export const GET_REPO_INFO = gql`
  query getRepoInfo($owner: String!, $name: String!) {
    search(owner:$owner, name:$name) {
      issues {
        totalCount
      }
      pullRequests {
        totalCount
      }
    }
  }
`;
