import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { fetchTrendingRepos } from '@/app/api/github-trend/route';
import * as styles from './TrendingSlider.css';

const TrendingSlider = ({
  language,
  daysAgo = 10,
}: {
  language: string;
  daysAgo?: number;
}) => {
  const [emblaRef] = useEmblaCarousel();
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingRepos(language, daysAgo);
        setRepos(data);
      } catch (err) {
        setError('Failed to fetch trending repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [language, daysAgo]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {repos.map((repo, index) => (
            <div className={styles.emblaSlide} key={index}>
              <div className={styles.card}>
                <h3>{repo.name}</h3>
                <p className={styles.cardDescription}>{repo.description}</p>
                <p className={styles.cardStars}>⭐ {repo.stars} stars</p>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;
