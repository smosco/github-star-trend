'use client';

import * as styles from './page.css';
import { CuratorSlide } from '@/components/CurationSlide/CuratorSlide';
import { CuratorList } from '@/components/CuratorList/CuratorList';
import { EditorComment } from '@/components/EditorComment/EditorComment';
import { TrendingRepos } from '@/components/TrendingRepos/TrendingRepos';

const StarredReposPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Weekly Dev Curation</h1>
          <p className={styles.description}>
            이번 주, GitHub에서 활발히 활동한 개발자들을 에디터가 직접
            큐레이션했습니다.
            <br />
            어떤 레포를 주목했고, 어떤 흐름이 생겨나고 있을까요? 함께
            확인해보세요.
          </p>
        </section>
        <CuratorSlide />
        <EditorComment />
        <TrendingRepos />
        <CuratorList />
      </div>
    </div>
  );
};

export default StarredReposPage;
