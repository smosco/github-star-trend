import { gql } from '@apollo/client';

export const GET_THEME_SLIDE = gql`
  query GetThemeSlide {
    latestTheme {
      title
      slug
      curators {
        username
        avatarUrl
        highlight
      }
    }
  }
`;
