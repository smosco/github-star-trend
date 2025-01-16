'use client';

import { useState, useEffect } from 'react';
import { githubClient } from '@/utils/githubClient';
import { GET_STARRED_REPOS } from '@/graphql/queries/getStarredRepos';

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
  repos: StarredRepo[] | null;
  error?: string;
}

const StarredReposPage = () => {
  const developers = [
    // 'theo3',
    // 'hassan-el',
    'mattpocock',
    // 'benawad',
    // 'jakearchibald',
    'codediodeio',
    // 'kentcdodds',
    'davidkpiano',
    // 'cassidoo',
    // 'jlengstorf',
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
              first: 10, // 최대 10개 가져오기
            };

            const data = await githubClient.request(
              GET_STARRED_REPOS,
              variables
            );
            const repos: StarredRepo[] = data.user.starredRepositories.edges;

            // 최근 1개월 동안 스타한 레포만 필터링
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            const filteredRepos = repos.filter((repo) => {
              const starredDate = new Date(repo.starredAt);
              return starredDate >= lastMonth;
            });

            return { developer, repos: filteredRepos };
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
      <h1>Developers' Starred Repositories</h1>
      {developerRepos.map(({ developer, repos, error }) => (
        <div key={developer}>
          <h2>{developer}'s Recent Stars</h2>
          {error ? (
            <p style={{ color: 'red' }}>Error: {error}</p>
          ) : repos && repos.length > 0 ? (
            <ul>
              {repos.map((repo) => (
                <li key={repo.node.name}>
                  <a
                    href={repo.node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{repo.node.name}</h3>
                  </a>
                  <p>{repo.node.description || 'No description provided'}</p>
                  <p>Owner: {repo.node.owner.login}</p>
                  <p>Stars: {repo.node.stargazerCount}</p>
                  {repo.node.primaryLanguage && (
                    <p>Language: {repo.node.primaryLanguage.name}</p>
                  )}
                  <p>Starred At: {new Date(repo.starredAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No stars in the past month.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarredReposPage;
