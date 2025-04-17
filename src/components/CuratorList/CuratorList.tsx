'use client';

import { useQuery } from '@apollo/client';
import { GET_THEME_WITH_REPOS } from '@/graphql/queries/getThemeWithRepos.ts';
import * as styles from './CuratorList.css.ts';

export function CuratorList() {
  const { data, loading, error } = useQuery(GET_THEME_WITH_REPOS);

  console.log(data);

  if (loading || error || !data?.latestTheme?.curators?.length) return null;

  return (
    <section>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
          marginBottom: '1rem',
        }}
      >
        🧑‍💻 전체 큐레이터 리스트
      </h2>
      <div className={styles.container}>
        {data.latestTheme.curators.map((c: any) => (
          <div key={c.username} className={styles.card}>
            <img src={c.avatarUrl} alt={c.username} className={styles.avatar} />
            <div className={styles.username}>{c.username}</div>
            <div className={styles.highlight}>{c.highlight}</div>

            {c.repos && c.repos.length > 0 && (
              <ul
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.875rem',
                  textAlign: 'left',
                }}
              >
                {c.repos.map((repo: any) => (
                  <li key={repo.url} style={{ marginBottom: '0.25rem' }}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 {repo.name}
                    </a>
                    {repo.description && (
                      <div style={{ color: '#888' }}>{repo.description}</div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
