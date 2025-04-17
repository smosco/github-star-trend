import { gql } from '@apollo/client';

export const GET_THEME_WITH_REPOS = gql`
  query GetThemeWithRepos {
    latestTheme {
      title
      slug
      curators {
        username
        avatarUrl
        highlight
        repos {
          name
          url
          description
        }
      }
    }
  }
`;
