'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import * as styles from './StarButton.css';

interface StarButtonProps {
  owner: string;
  name: string;
}

const StarButton = ({ owner, name }: StarButtonProps) => {
  const [isStarred, setIsStarred] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchStarStatus = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/github-stars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'status',
          repoOwner: owner,
          repoName: name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch star status');
      }

      const data = await response.json();
      setIsStarred(data.viewerHasStarred); // 단순화된 응답 구조
    } catch (error) {
      console.error('Error fetching star status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStar = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/github-stars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: isStarred ? 'remove' : 'add',
          repoOwner: owner,
          repoName: name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle star');
      }

      const data = await response.json();
      setIsStarred(data.viewerHasStarred); // 단순화된 응답 구조
    } catch (error) {
      console.error('Error toggling star:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarStatus();
  }, []);

  return (
    <button
      onClick={handleToggleStar}
      className={styles.button}
      disabled={loading}
    >
      {isStarred ? (
        <Star color="#FFD700" fill="#FFD700" size={20} />
      ) : (
        <Star color="#FFD700" size={20} />
      )}
    </button>
  );
};

export default StarButton;
