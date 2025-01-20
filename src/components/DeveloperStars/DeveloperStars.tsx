import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as styles from './DeveloperStars.css';
import StarButton from '../StarButton/StarButton';

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
      <a
        href={`https://github.com/${developer.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.header}
      >
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
      </a>
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
                  ⭐ {repo.stars.toLocaleString()}
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
                <div className={styles.repoMeta}>
                  <StarButton owner={repo.owner} name={repo.name} />
                </div>
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
