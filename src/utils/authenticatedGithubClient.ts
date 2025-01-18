import { GraphQLClient } from 'graphql-request';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export const authenticatedGithubClient = (accessToken: string) => {
  if (!accessToken) {
    throw new Error('No GitHub access token provided');
  }

  return new GraphQLClient(GITHUB_GRAPHQL_API, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
