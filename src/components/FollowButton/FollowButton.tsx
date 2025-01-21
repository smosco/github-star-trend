'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react'; // 로그인 상태 확인 및 로그인 함수
import * as styles from './FollowButton.css';

interface FollowButtonProps {
  userId: string; // GitHub 사용자 ID
}

const FollowButton = ({ userId }: FollowButtonProps) => {
  const { data: session } = useSession(); // 로그인 상태 확인
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null); // 팔로우 상태
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // 모달 상태

  // 초기 팔로우 상태 확인
  useEffect(() => {
    const fetchFollowStatus = async () => {
      if (!session?.accessToken) return; // 로그인하지 않았으면 상태를 가져오지 않음

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
  }, [userId, session]);

  // 팔로우 상태 토글
  const handleToggleFollow = async () => {
    if (!session?.accessToken) {
      setShowLoginModal(true); // 로그인하지 않은 경우 모달 표시
      return;
    }

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

  return (
    <>
      {showLoginModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>로그인이 필요합니다. 계속 진행하려면 로그인해주세요.</p>
            <button className={styles.modalButton} onClick={() => signIn()}>
              로그인
            </button>
            <button
              className={styles.modalButtonClose}
              onClick={() => setShowLoginModal(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <button
        className={styles.button}
        onClick={handleToggleFollow}
        disabled={loading || (!!session && isFollowing === null)}
      >
        {loading ? 'Processing...' : isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </>
  );
};

export default FollowButton;
