export const toggleFollow = async (userId: string, isFollowing: boolean) => {
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
    return data.viewerIsFollowing; // 최신 팔로우 상태 반환
  } catch (error) {
    console.error('Error toggling follow status:', error);
    throw error;
  }
};
