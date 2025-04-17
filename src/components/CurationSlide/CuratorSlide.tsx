'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useQuery } from '@apollo/client';
import { GET_THEME_SLIDE } from '@/graphql/queries/getThemeSlide';
import * as styles from './CuratorSlide.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Curator } from '@/app/api/graphql/types';

export function CuratorSlide() {
  const { data } = useQuery(GET_THEME_SLIDE);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center', // 슬라이드 가운데 위치
    containScroll: 'trimSnaps', // 넘침 방지
    loop: false, // 필요 시 true 가능
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const curators = data?.latestTheme?.curators ?? [];

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

  if (!curators.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.headingIcon}>✨</span> 이번 주 대표 큐레이터
      </h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {curators.map((curator: Curator) => (
              <div key={curator.username} className={styles.slide}>
                <div className={styles.card}>
                  <img
                    src={curator.avatarUrl}
                    alt={curator.username}
                    className={styles.avatar}
                  />
                  <div className={styles.name}>{curator.username}</div>
                  <div className={styles.highlight}>{curator.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {canScrollPrev && (
          <button
            className={styles.navButtonLeft}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {canScrollNext && (
          <button
            className={styles.navButtonRight}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <div className={styles.indicators}>
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
