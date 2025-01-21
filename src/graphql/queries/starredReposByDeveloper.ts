import { gql } from 'graphql-request';

export const STARRED_REPOS_BY_DEVELOPER = gql`
  query StarredReposByDeveloper($username: String!, $first: Int!) {
    user(login: $username) {
      id
      name
      login
      avatarUrl
      bio
      starredRepositories(
        first: $first
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        edges {
          starredAt
          node {
            name
            owner {
              login
            }
            url
            description
            stargazerCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;
