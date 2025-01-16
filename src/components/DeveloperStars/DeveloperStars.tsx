import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as styles from './DeveloperStars.css';

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

interface DeveloperStarsProps {
  developer: Developer;
}

const DeveloperStars = ({ developer }: DeveloperStarsProps) => {
  // 1달 이내의 데이터 필터링
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const recentRepos = developer.starredRepos.filter((repo) => {
    const starredDate = new Date(repo.starredAt);
    return starredDate >= lastMonth;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={developer.avatar || '/placeholder.svg'}
          alt={developer.name}
          width={64}
          height={64}
          className={styles.avatar}
        />
        <div>
          <h2 className={styles.name}>{developer.name}</h2>
          <p className={styles.bio}>{developer.bio}</p>
        </div>
      </div>
      <div>
        {recentRepos.map((repo) => (
          <div key={repo.name} className={styles.repoContainer}>
            <div className="p-4">
              <div className={styles.repoHeader}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoLink}
                >
                  {repo.owner}/{repo.name}
                </a>
                <span className={styles.repoDate}>
                  {format(new Date(repo.starredAt), 'yyyy년 MM월 dd일', {
                    locale: ko,
                  })}
                </span>
              </div>
              <p className={styles.repoDescription}>{repo.description}</p>
              <div className={styles.repoMeta}>
                <span className={styles.starContainer}>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stars.toLocaleString()}
                </span>
                {repo.language && (
                  <span className={styles.languageBadge}>
                    <span
                      className={styles.languageColor}
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                      }}
                    ></span>
                    {repo.language}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572a5',
    Rust: '#dea584',
    Elixir: '#6e4a7e',
    Zig: '#ec91d8',
  };
  return colors[language] || '#d1d5db'; // 기본값: gray
}

export default DeveloperStars;
