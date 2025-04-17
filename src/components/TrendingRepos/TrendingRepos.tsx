'use client';

import { useQuery } from '@apollo/client';
import { GET_TRENDING_REPOS } from '@/graphql/queries/getTrendingRepos';
import * as styles from './TrendingRepos.css';

export function TrendingRepos() {
  const { data, loading, error } = useQuery(GET_TRENDING_REPOS);

  if (loading || !data) return null;
  const repos = data.trendingStarredRepos;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.icon}>🔥</span> 이번 주 공통으로 주목받은 레포
      </h2>

      {repos.length === 0 ? (
        <p className={styles.empty}>
          이번 주에는 여러 큐레이터가 공통으로 주목한 레포가 없어요.
        </p>
      ) : (
        <ul className={styles.repoList}>
          {repos.map((repo: any) => (
            <li key={repo.url} className={styles.repoItem}>
              <div className={styles.repoRow}>
                <div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.repoName}
                  >
                    {repo.nameWithOwner}
                  </a>
                  <span className={styles.starCount}>
                    — {repo.starredBy.length}명 주목
                  </span>
                </div>
                <div className={styles.curatorBadge}>
                  👀 {repo.starredBy.join(', ')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
