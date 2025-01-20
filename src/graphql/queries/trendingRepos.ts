import { gql } from 'graphql-request';

export const GET_TRENDING_REPOS = gql`
  query GetTrendingRepos($query: String!) {
    search(query: $query, type: REPOSITORY, first: 5) {
      edges {
        node {
          ... on Repository {
            name
            description
            stargazers {
              totalCount
            }
            updatedAt
            url
          }
        }
      }
    }
  }
`;
