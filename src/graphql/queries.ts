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

export const GET_TRENDING_REPOS = gql`
  query GetTrendingRepos {
    trendingStarredRepos {
      nameWithOwner
      url
      description
      starredBy
    }
  }
`;
