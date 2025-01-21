'use client';

import { useEffect, useState } from 'react';
import * as styles from './StarredReposByDeveloper.css';
import DeveloperStars from '@/components/DeveloperStars/DeveloperStars';

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

const StarredReposByDeveloper = () => {
  const [developersData, setDevelopersData] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevelopersData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/starred-repos-by-developer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            developers: ['terkelg', 'lukeed', 'developit'], // 원하는 개발자 배열
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch developers data');
        }

        const data = await response.json();
        setDevelopersData(data.developers);
      } catch (error) {
        setError('Failed to fetch starred repositories by developers');
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopersData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.title}>
        Starred Repositories By Developer
        <span className={styles.subtitle}>(Last 1 month)</span>
      </h2>
      {developersData.map((developer) => (
        <DeveloperStars key={developer.username} developer={developer} />
      ))}
    </div>
  );
};

export default StarredReposByDeveloper;
