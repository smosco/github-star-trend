'use client';

import { useQuery } from '@apollo/client';
import { GET_TRENDING_REPOS } from '@/graphql/queries';
import * as styles from './TrendingRepos.css';

export function TrendingRepos() {
  const { data, loading, error } = useQuery(GET_TRENDING_REPOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const repos = data?.trendingStarredRepos;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>🔥 이번 주 공통으로 주목받은 레포</h2>

      {repos.length === 0 ? (
        <p className={styles.empty}>
          이번 주에는 여러 큐레이터가 공통으로 주목한 레포가 없어요.
        </p>
      ) : (
        <ul className={styles.list}>
          {repos.map((repo: any) => (
            <li key={repo.url} className={styles.item}>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className={styles.repoLink}
              >
                {repo.nameWithOwner}
              </a>
              <span className={styles.count}>
                — {repo.starredBy.length}명 주목
              </span>
              <div className={styles.curatorList}>
                👀 {repo.starredBy.join(', ')}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
