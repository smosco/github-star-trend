import { GraphQLClient } from 'graphql-request';
import { useAuth } from '@clerk/nextjs';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export function useAuthenticatedGithubClient() {
  const { getToken } = useAuth();

  return async () => {
    const accessToken = await getToken({ template: 'oauth_github' });

    if (!accessToken) {
      throw new Error('GitHub OAuth access token is missing.');
    }

    return new GraphQLClient(GITHUB_GRAPHQL_API, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
}
