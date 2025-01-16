import React from 'react';
import * as styles from './RecentStars.css';

interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  starredAt: string;
  thumbnail: string;
}

interface RecentStarsProps {
  developer: string;
  repos: Repo[];
  error?: string;
}

const RecentStars = ({ developer, repos, error }: RecentStarsProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{developer}'s starred repositories</h1>
      <p className={styles.dateText}>{new Date().toLocaleDateString()}</p>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className={styles.cardContainer}>
          {repos.map((repo) => (
            <div key={repo.name} className={styles.card}>
              <img
                src={repo.thumbnail}
                alt={`${repo.name} thumbnail`}
                className={styles.thumbnail}
              />
              <div className={styles.cardContent}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoName}
                >
                  {repo.name}
                </a>
                <p className={styles.repoDescription}>
                  {repo.description || 'No description provided.'}
                </p>
                <div className={styles.repoDetails}>
                  <span>⭐ {repo.stars}</span>
                  <span>{repo.language || 'Unknown'}</span>
                  <span>{new Date(repo.starredAt).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentStars;
