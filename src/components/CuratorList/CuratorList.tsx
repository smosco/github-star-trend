'use client';

import * as styles from './CuratorList.css';
import { useQuery } from '@apollo/client';
import { GET_THEME_WITH_REPOS } from '@/graphql/queries/getThemeWithRepos.ts';
export function CuratorList() {
  const { data, loading, error } = useQuery(GET_THEME_WITH_REPOS);

  if (loading || error || !data?.latestTheme?.curators?.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.headingIcon}>🧑‍💻</span> 전체 큐레이터 리스트
      </h2>

      <div className={styles.grid}>
        {data.latestTheme.curators.map((curator: any) => (
          <div key={curator.username} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <img
                  src={
                    curator.avatarUrl || '/placeholder.svg?height=64&width=64'
                  }
                  alt={curator.username}
                  className={styles.avatar}
                />
                <div className={styles.profile}>
                  <a
                    href={curator.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.username}
                  >
                    {curator.username}
                  </a>
                  <p className={styles.highlight}>{curator.highlight}</p>
                </div>
              </div>

              {curator.bio && <p className={styles.bio}>{curator.bio}</p>}

              {curator.repos?.length > 0 && (
                <div>
                  <h4 className={styles.repoTitle}>추천 레포지토리</h4>
                  <ul className={styles.repoList}>
                    {curator.repos.map((repo: any) => (
                      <li key={repo.url} className={styles.repoItem}>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repoName}
                        >
                          {repo.name}
                        </a>
                        {repo.description && (
                          <p className={styles.repoDesc}>{repo.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
