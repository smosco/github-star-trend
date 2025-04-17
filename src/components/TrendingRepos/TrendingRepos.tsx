'use client';

import { useQuery } from '@apollo/client';
import { GET_TRENDING_REPOS } from '@/graphql/queries';
import * as styles from './TrendingRepos.css';

export function TrendingRepos() {
  const { data, loading, error } = useQuery(GET_TRENDING_REPOS);

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>🔥 이번 달 공통으로 주목받은 레포</h2>
      <ul className={styles.list}>
        {data.trendingStarredRepos.map((repo: any) => (
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
    </section>
  );
}
