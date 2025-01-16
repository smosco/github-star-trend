'use client';

import { useState, useEffect } from 'react';
import { githubClient } from '@/utils/githubClient';
import { GET_STARRED_REPOS } from '@/graphql/queries/getStarredRepos';
import RecentStars from '@/components/RecentStars/RecentStars';

interface GetStarredReposResponse {
  user: {
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

interface StarredRepo {
  starredAt: string;
  node: {
    name: string;
    owner: { login: string };
    url: string;
    description: string;
    stargazerCount: number;
    primaryLanguage: { name: string } | null;
  };
}

interface DeveloperRepos {
  developer: string;
  repos:
    | {
        name: string;
        description: string;
        url: string;
        stars: number;
        language: string;
        starredAt: string;
        thumbnail: string;
      }[]
    | null;
  error?: string;
}

const StarredReposPage = () => {
  const developers = [
    'mattpocock',
    'codediodeio',
    'davidkpiano',
    'soaple',
    'tonyfromundefined',
  ];

  const [developerRepos, setDeveloperRepos] = useState<DeveloperRepos[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStarredRepos = async () => {
      setLoading(true);
      const results: DeveloperRepos[] = [];

      try {
        const fetchPromises = developers.map(async (developer) => {
          try {
            const variables = {
              username: developer,
              first: 10,
            };

            const data: GetStarredReposResponse = await githubClient.request(
              GET_STARRED_REPOS,
              variables
            );

            const repos: StarredRepo[] = data.user.starredRepositories.edges;

            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            const filteredRepos = repos.filter((repo) => {
              const starredDate = new Date(repo.starredAt);
              return starredDate >= lastMonth;
            });

            const reposWithThumbnails = filteredRepos.map((repo) => ({
              name: repo.node.name,
              description: repo.node.description,
              url: repo.node.url,
              stars: repo.node.stargazerCount,
              language: repo.node.primaryLanguage?.name || 'Unknown',
              starredAt: repo.starredAt,
              thumbnail: `https://opengraph.githubassets.com/1a2b3c4d5e/${repo.node.owner.login}/${repo.node.name}`,
            }));

            return { developer, repos: reposWithThumbnails };
          } catch (error: any) {
            return { developer, repos: null, error: error.message };
          }
        });

        const responses = await Promise.allSettled(fetchPromises);

        responses.forEach((response, index) => {
          if (response.status === 'fulfilled') {
            results.push(response.value);
          } else {
            results.push({
              developer: developers[index],
              repos: null,
              error: 'Failed to fetch data',
            });
          }
        });

        setDeveloperRepos(results);
      } finally {
        setLoading(false);
      }
    };

    fetchStarredRepos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Starred Repositories</h1>
      {developerRepos.map(({ developer, repos, error }) => (
        <RecentStars
          key={developer}
          developer={developer}
          repos={repos || []}
          error={error}
        />
      ))}
    </div>
  );
};

export default StarredReposPage;
