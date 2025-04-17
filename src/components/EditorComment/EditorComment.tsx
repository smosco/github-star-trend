'use client';

import { useQuery } from '@apollo/client';
import { GET_LATEST_THEME } from '@/graphql/queries/getLatestTheme';
import * as styles from './EditorComment.css';

export function EditorComment() {
  const { data, loading, error } = useQuery(GET_LATEST_THEME);

  if (loading || error || !data?.latestTheme?.editorComment) return null;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>🧾</div>
        <div className={styles.content}>
          <h3 className={styles.title}>에디터의 말</h3>
          <p className={styles.comment}>{data.latestTheme.editorComment}</p>
        </div>
      </div>
    </section>
  );
}
