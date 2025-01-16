export const GET_STARRED_REPOS = `
  query GetStarredRepos($username: String!, $first: Int!) {
    user(login: $username) {
      starredRepositories(first: $first, orderBy: { field: STARRED_AT, direction: DESC }) {
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
