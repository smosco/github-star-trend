import { gql } from '@apollo/client';

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
