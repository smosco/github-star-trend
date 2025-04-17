'use client';

import * as styles from './page.css';
// import AuthButton from '@/components/AuthButton/AuthButton';
// import TrendingSlider from '@/components/TrendingSlider/TrendingSlider';
// import StarredReposByDeveloper from '@/components/StarredReposByDeveloper/StarredReposByDeveloper';
import { CuratorSlide } from '@/components/CurationSlide/CuratorSlide';
import { CuratorList } from '@/components/CuratorList/CuratorList';
import { EditorComment } from '@/components/EditorComment/EditorComment';
import { TrendingRepos } from '@/components/TrendingRepos/TrendingRepos';

const StarredReposPage = () => {
  return (
    <div>
      {/* <AuthButton /> */}
      <section>
        <h1 className={styles.title}>Weekly Dev Curation</h1>
        {/* <h2 className={styles.subtitle}>이번 주의 주제: MCP에 진심인 개발자들</h2> */}
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
      {/* 다음: KeywordFilter, TrendingRepos, CuratorList */}
      {/* <TrendingSlider language="TypeScript" daysAgo={7} />
      <StarredReposByDeveloper /> */}
    </div>
  );
};

export default StarredReposPage;
