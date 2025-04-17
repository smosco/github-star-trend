'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useQuery } from '@apollo/client';
import { GET_THEME_SLIDE } from '@/graphql/queries';
import * as styles from './CuratorSlide.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Curator } from '@/app/api/graphql/types';

export function CuratorSlide() {
  const { data, loading } = useQuery(GET_THEME_SLIDE);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  if (loading || !data?.latestTheme?.curators) return null;

  const curators = data.latestTheme.curators.slice(0, 5);

  return (
    <section>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
          marginBottom: '1rem',
        }}
      >
        ✨ 이번 주 대표 큐레이터
      </h2>

      <div className={styles.wrapper}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {curators.map((c: any) => (
              <div key={c.username} className={styles.slide}>
                <div className={styles.card}>
                  <img
                    src={c.avatarUrl}
                    alt={c.username}
                    style={{ width: 60, height: 60, borderRadius: '9999px' }}
                  />
                  <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>
                    {c.username}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#666',
                      marginTop: '0.25rem',
                    }}
                  >
                    {c.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {canScrollPrev && (
          <button
            className={styles.prevButton}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {canScrollNext && (
          <button
            className={styles.nextButton}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* 인디케이터 점 */}
      <div className={styles.dots}>
        {curators.map((_: Curator, index: number) => (
          <span
            key={index}
            className={index === selectedIndex ? styles.dotActive : styles.dot}
          />
        ))}
      </div>
    </section>
  );
}
