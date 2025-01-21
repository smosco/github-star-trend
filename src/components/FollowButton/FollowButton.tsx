import React, { useState, useEffect } from 'react';
import * as styles from './FollowButton.css';

interface FollowButtonProps {
  userId: string; // GitHub 사용자 ID
}

const FollowButton = ({ userId }: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null); // 팔로우 상태
  const [loading, setLoading] = useState(false);

  // 초기 팔로우 상태 확인
  useEffect(() => {
    const fetchFollowStatus = async () => {
      try {
        const response = await fetch('/api/github-follow-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch follow status');
        }

        const data = await response.json();
        setIsFollowing(data.viewerIsFollowing);
      } catch (error) {
        console.error('Error fetching follow status:', error);
      }
    };

    fetchFollowStatus();
  }, [userId]);

  // 팔로우 상태 토글
  const handleToggleFollow = async () => {
    if (isFollowing === null) return; // 팔로우 상태를 알기 전에는 동작하지 않음

    setLoading(true);
    try {
      const response = await fetch('/api/github-follow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, isFollowing }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle follow status');
      }

      const data = await response.json();
      setIsFollowing(data.viewerIsFollowing);
    } catch (error) {
      console.error('Failed to toggle follow:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isFollowing === null) {
    return (
      <button className={styles.button} disabled>
        Loading...
      </button>
    ); // 로딩 상태 표시
  }

  return (
    <button
      className={styles.button}
      onClick={handleToggleFollow}
      disabled={loading}
    >
      {loading ? 'Processing...' : isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
