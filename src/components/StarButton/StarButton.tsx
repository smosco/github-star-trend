'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react'; // 로그인 상태 확인 및 로그인 함수
import { Star } from 'lucide-react';
import * as styles from './StarButton.css';

interface StarButtonProps {
  owner: string;
  name: string;
}

const StarButton = ({ owner, name }: StarButtonProps) => {
  const { data: session } = useSession(); // 로그인 상태 확인
  const [isStarred, setIsStarred] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // 모달 상태

  const fetchStarStatus = async () => {
    try {
      if (!session?.accessToken) {
        console.warn('User is not logged in. Skipping fetchStarStatus.');
        return;
      }

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
    if (!session?.accessToken) {
      setShowLoginModal(true); // 로그인하지 않은 경우 모달 표시
      return;
    }

    setLoading(true);
    try {
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
  }, [session]); // 로그인 상태가 바뀔 때만 요청

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
        onClick={handleToggleStar}
        className={styles.button}
        disabled={loading}
      >
        <Star
          color={isStarred ? '#FFD700' : '#A0AEC0'}
          fill={isStarred ? '#FFD700' : 'none'}
          size={20}
        />
        <span className={styles.buttonText}>
          {isStarred ? 'Unstar' : 'Star'}
        </span>
      </button>
    </>
  );
};

export default StarButton;
