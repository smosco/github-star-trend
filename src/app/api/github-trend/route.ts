import { NextResponse } from 'next/server';
import { githubClient } from '@/utils/githubClient';
import { GET_TRENDING_REPOS } from '@/graphql/queries/trendingRepos';

// GraphQL 응답 타입 정의
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

export async function GET(request: Request) {
  // 요청 파라미터 처리
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language') || 'TypeScript';
  const daysAgo = parseInt(searchParams.get('daysAgo') || '7', 10);

  const fetchDate = new Date();
  fetchDate.setDate(fetchDate.getDate() - daysAgo);
  const formattedDate = fetchDate.toISOString().split('T')[0];

  // GraphQL Query 생성
  const query = `language:${language} sort:stars created:>${formattedDate}`;

  try {
    // GraphQL 요청 수행
    const response: GraphQLResponse = await githubClient.request(
      GET_TRENDING_REPOS,
      {
        query,
      }
    );

    // 데이터 변환
    const repos = response.search.edges.map((edge) => ({
      name: edge.node.name,
      description: edge.node.description,
      stars: edge.node.stargazers.totalCount,
      url: edge.node.url,
    }));

    // JSON 응답 반환
    return NextResponse.json(repos);
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trending repositories' },
      { status: 500 }
    );
  }
}
