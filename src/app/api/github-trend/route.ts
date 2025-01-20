import { githubClient } from '@/utils/githubClient';
import { GET_TRENDING_REPOS } from '@/graphql/queries/trendingRepos';

interface TrendingRepo {
  name: string;
  description: string;
  stars: number;
  url: string;
}

interface GraphQLResponse {
  search: {
    edges: {
      node: {
        name: string;
        description: string;
        stargazers: {
          totalCount: number;
        };
        updatedAt: string;
        url: string;
      };
    }[];
  };
}

export const fetchTrendingRepos = async (
  language: string,
  daysAgo = 10
): Promise<TrendingRepo[]> => {
  const fetchDate = new Date();
  fetchDate.setDate(fetchDate.getDate() - daysAgo);
  const formattedDate = fetchDate.toISOString().split('T')[0]; // ISO 날짜 형식으로 변환 (YYYY-MM-DD)

  // query 문자열을 미리 조합
  const query = `language:${language} sort:stars created:>${formattedDate}`;

  try {
    const response: GraphQLResponse = await githubClient.request(
      GET_TRENDING_REPOS,
      {
        query,
      }
    );

    return response.search.edges.map((edge) => ({
      name: edge.node.name,
      description: edge.node.description,
      stars: edge.node.stargazers.totalCount,
      url: edge.node.url,
    }));
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    throw new Error('Failed to fetch trending repositories');
  }
};
