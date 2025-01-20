'use client';

import * as styles from './page.css';
import AuthButton from '@/components/AuthButton/AuthButton';
import TrendingSlider from '@/components/TrendingSlider/TrendingSlider';
import StarredReposByDeveloper from '@/components/StarredReposByDeveloper/StarredReposByDeveloper';

const StarredReposPage = () => {
  return (
    <div>
      <AuthButton />
      <h1 className={styles.title}>STAR TRACKER</h1>
      <TrendingSlider language="TypeScript" daysAgo={7} />
      <StarredReposByDeveloper />
    </div>
  );
};

export default StarredReposPage;
