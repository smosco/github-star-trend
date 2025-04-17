// lib/github.ts
import { gql, request } from 'graphql-request';

const GITHUB_API_URL = 'https://api.github.com/graphql';

const STARRED_REPOS_QUERY = gql`
  query GetStarredRepos($username: String!) {
    user(login: $username) {
      starredRepositories(
        first: 50
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        edges {
          starredAt
          node {
            nameWithOwner
            url
            description
          }
        }
      }
    }
  }
`;

export async function getRecentStarredRepos(
  username: string,
  token: string
): Promise<
  {
    nameWithOwner: string;
    url: string;
    description?: string | null;
    starredAt: string;
  }[]
> {
  try {
    const res = (await request(
      GITHUB_API_URL,
      STARRED_REPOS_QUERY,
      { username },
      {
        Authorization: `Bearer ${token}`,
      }
    )) as {
      user: {
        starredRepositories: {
          edges: {
            starredAt: string;
            node: {
              nameWithOwner: string;
              url: string;
              description: string | null;
            };
          }[];
        };
      };
    };
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    return res.user.starredRepositories.edges
      .filter((edge: any) => new Date(edge.starredAt) > oneWeekAgo)
      .map((edge: any) => ({
        nameWithOwner: edge.node.nameWithOwner,
        url: edge.node.url,
        description: edge.node.description,
        starredAt: edge.starredAt,
      }));
  } catch (err) {
    console.error(`GitHub API error for ${username}:`, err);
    return [];
  }
}
