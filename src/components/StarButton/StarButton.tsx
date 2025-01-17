import React, { useState, useEffect } from 'react';
import { useGithubActions } from '@/api/githubStar';
import { Star } from 'lucide-react';
import * as styles from './StarButton.css';

const StarButton = ({ owner, name }: { owner: string; name: string }) => {
  const { addStar, removeStar, isRepoStarred } = useGithubActions();
  const [isStarred, setIsStarred] = useState(false);
  const [repoId, setRepoId] = useState('');

  useEffect(() => {
    async function fetchStarStatus() {
      try {
        const data = await isRepoStarred(owner, name);
        setRepoId(data.repository.id);
        setIsStarred(data.repository.viewerHasStarred);
      } catch (error) {
        console.error('Error fetching star status:', error);
      }
    }

    fetchStarStatus();
  }, [owner, name, isRepoStarred]);

  const handleToggleStar = async () => {
    try {
      if (isStarred) {
        await removeStar(repoId);
        setIsStarred(false);
      } else {
        await addStar(repoId);
        setIsStarred(true);
      }
    } catch (error) {
      console.error('Error toggling star:', error);
    }
  };

  return (
    <button onClick={handleToggleStar} className={styles.button}>
      {isStarred ? (
        <Star color="#FFD700" fill="#FFD700" size={20} /> // 채워진 별
      ) : (
        <Star color="#FFD700" size={20} /> // 비워진 별
      )}
    </button>
  );
};

export default StarButton;
