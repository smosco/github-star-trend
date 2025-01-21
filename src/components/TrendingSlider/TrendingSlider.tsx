import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as styles from './TrendingSlider.css';

const fetchTrendingRepos = async (language: string, daysAgo: number) => {
  const response = await fetch(
    `/api/github-trend?language=${encodeURIComponent(
      language
    )}&daysAgo=${daysAgo}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch trending repositories');
  }

  return response.json();
};

const TrendingSlider = ({
  language,
  daysAgo = 3,
}: {
  language: string;
  daysAgo?: number;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });
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
    <div className={styles.container}>
      <h2 className={styles.title}>
        Trending {language} Repositories
        <span className={styles.subtitle}>(Last {daysAgo} days)</span>
      </h2>
      <div className={styles.emblaContainer} ref={emblaRef}>
        <div className={styles.emblaSlides}>
          {repos.map((repo, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{repo.name}</h3>
                  <p className={styles.cardDescription}>{repo.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.star}>
                    <svg
                      className={styles.starIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stars}
                  </span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;
