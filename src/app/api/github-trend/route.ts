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

// 트렌딩 레포지토리를 가져오는 함수
export const fetchTrendingRepos = async (
  language: string,
  daysAgo = 7
): Promise<TrendingRepo[]> => {
  const fetchDate = new Date();
  fetchDate.setDate(fetchDate.getDate() - daysAgo); // daysAgo 만큼 이전 날짜 계산
  const formattedDate = fetchDate.toISOString().split('T')[0]; // ISO 날짜 형식 (YYYY-MM-DD)

  // query 문자열 생성
  const query = `language:${language} sort:stars created:>${formattedDate}`;

  try {
    const response = await githubClient.request<GraphQLResponse>(
      GET_TRENDING_REPOS,
      { query }
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
