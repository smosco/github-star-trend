'use client';

import { useQuery } from '@apollo/client';
import { GET_LATEST_THEME } from '@/graphql/queries';
import * as styles from './EditorComment.css';

export function EditorComment() {
  const { data, loading, error } = useQuery(GET_LATEST_THEME);

  console.log(data);

  if (loading || error || !data?.latestTheme?.editorComment) return null;

  return (
    <section className={styles.container}>
      🧾 <strong>에디터의 말:</strong>
      <br />
      {data.latestTheme.editorComment}
    </section>
  );
}
