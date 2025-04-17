import { gql } from '@apollo/client';

export const GET_LATEST_THEME = gql`
  query GetLatestTheme {
    latestTheme {
      title
      slug
      editorComment
      curators {
        username
        highlight
        avatarUrl
        repos {
          name
          url
          description
        }
      }
    }
  }
`;
