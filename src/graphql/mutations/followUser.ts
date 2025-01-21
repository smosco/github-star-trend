import { gql } from 'graphql-request';

export const FOLLOW_USER_MUTATION = gql`
  mutation FollowUser($userId: ID!) {
    followUser(input: { userId: $userId }) {
      user {
        id
        viewerIsFollowing
      }
    }
  }
`;

export const UNFOLLOW_USER_MUTATION = gql`
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(input: { userId: $userId }) {
      user {
        id
        viewerIsFollowing
      }
    }
  }
`;
