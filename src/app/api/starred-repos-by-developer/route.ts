import { NextResponse } from 'next/server';
import { STARRED_REPOS_BY_DEVELOPER } from '@/graphql/queries/starredReposByDeveloper';
import { githubClient } from '@/utils/githubClient';

interface Repo {
  name: string;
  owner: string;
  url: string;
  description: string;
  stars: number;
  language: string;
  starredAt: string;
}

interface Developer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  starredRepos: Repo[];
}

interface GetStarredReposResponse {
  user: {
    id: string;
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    starredRepositories: {
      edges: {
        starredAt: string;
        node: {
          name: string;
          owner: { login: string };
          url: string;
          description: string;
          stargazerCount: number;
          primaryLanguage: { name: string } | null;
        };
      }[];
    };
  };
}

export async function POST(req: Request) {
  try {
    const { developers } = await req.json();

    if (!developers || !Array.isArray(developers)) {
      return NextResponse.json(
        { error: 'Invalid request payload' },
        { status: 400 }
      );
    }

    const fetchDeveloperData = async (
      developer: string
    ): Promise<Developer | null> => {
      const variables = { username: developer, first: 10 };
      const data: GetStarredReposResponse = await githubClient.request(
        STARRED_REPOS_BY_DEVELOPER,
        variables
      );

      const repos: Repo[] = data.user.starredRepositories.edges.map((repo) => ({
        name: repo.node.name,
        owner: repo.node.owner.login,
        url: repo.node.url,
        description: repo.node.description,
        stars: repo.node.stargazerCount,
        language: repo.node.primaryLanguage?.name || 'Unknown',
        starredAt: repo.starredAt,
      }));

      return {
        id: data.user.id,
        name: data.user.name,
        username: data.user.login,
        avatar: data.user.avatarUrl,
        bio: data.user.bio,
        starredRepos: repos,
      };
    };

    const developersData = await Promise.all(
      developers.map((developer: string) =>
        fetchDeveloperData(developer).catch((error) => {
          console.error(`Failed to fetch data for ${developer}:`, error);
          return null;
        })
      )
    );

    return NextResponse.json({
      developers: developersData.filter(
        (dev): dev is Developer => dev !== null
      ),
    });
  } catch (error: any) {
    console.error('Error in github-starred-repos API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
