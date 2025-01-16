import React from 'react';
import { format } from 'date-fns';
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
      <h2 className={styles.title}>{developer}'s starred repositories</h2>
      <p className={styles.date}>{format(new Date(), 'MMMM d, yyyy')}</p>
      {error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : (
        <div className={styles.grid}>
          {repos.map((repo) => (
            <div key={repo.name} className={styles.card}>
              <img
                src={repo.thumbnail || '/placeholder.svg'}
                alt={`${repo.name} thumbnail`}
                className={styles.thumbnail}
              />
              <div className={styles.cardContent}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {repo.name}
                </a>
                <p className={styles.description}>
                  {repo.description || 'No description provided.'}
                </p>
                <div className={styles.meta}>
                  <span className={styles.starContainer}>
                    <svg
                      className={styles.starIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stars}
                  </span>
                  <span className={styles.languageBadge}>
                    {repo.language || 'Unknown'}
                  </span>
                  <span>
                    {format(new Date(repo.starredAt), 'MMM d, HH:mm')}
                  </span>
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
