'use client';

import { useState, useEffect } from 'react';
import { githubClient } from '@/utils/githubClient';
import { STARRED_REPOS_BY_DEVELOPER } from '@/graphql/queries/starredReposByDeveloper.ts';
import * as styles from './page.css';
import DeveloperStars from '@/components/DeveloperStars/DeveloperStars';
import AuthButton from '@/components/AuthButton/AuthButton';
import TrendingSlider from '@/components/TrendingSlider/TrendingSlider';

interface GetStarredReposResponse {
  user: {
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
  name: string;
  username: string;
  avatar: string;
  bio: string;
  starredRepos: Repo[];
}

const StarredReposPage = () => {
  const developers = [
    'mattpocock',
    'codediodeio',
    // 'davidkpiano',
    // 'soaple',
    // 'tonyfromundefined',
  ];

  const [developerRepos, setDeveloperRepos] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStarredRepos = async () => {
      setLoading(true);

      try {
        const fetchPromises = developers.map(async (developer) => {
          try {
            const variables = { username: developer, first: 10 };
            const data: GetStarredReposResponse = await githubClient.request(
              STARRED_REPOS_BY_DEVELOPER,
              variables
            );

            const repos = data.user.starredRepositories.edges.map((repo) => ({
              name: repo.node.name,
              owner: repo.node.owner.login,
              url: repo.node.url,
              description: repo.node.description,
              stars: repo.node.stargazerCount,
              language: repo.node.primaryLanguage?.name || 'Unknown',
              starredAt: repo.starredAt,
            }));

            return {
              name: data.user.name,
              username: data.user.login,
              avatar: data.user.avatarUrl,
              bio: data.user.bio,
              starredRepos: repos,
            };
          } catch (error: any) {
            console.error(`Failed to fetch data for ${developer}:`, error);
            return null;
          }
        });

        const responses = await Promise.all(fetchPromises);
        const filteredResponses = responses.filter(
          (response): response is Developer => response !== null
        );

        setDeveloperRepos(filteredResponses);
      } finally {
        setLoading(false);
      }
    };

    fetchStarredRepos();
  }, []);

  return (
    <div>
      <AuthButton />
      <h1 className={styles.title}>STAR TRACKER</h1>
      {loading && (
        <div className={styles.loaderContainer}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <TrendingSlider language="TypeScript" daysAgo={7} />
      <div className={styles.contentContainer}>
        {developerRepos.map((developer) => (
          <DeveloperStars key={developer.username} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default StarredReposPage;
