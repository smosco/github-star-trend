import { style } from '@vanilla-extract/css';

export const embla = style({
  overflow: 'hidden',
  width: '100%',
});

export const emblaViewport = style({
  display: 'flex',
  gap: '16px',
});

export const emblaContainer = style({
  display: 'flex',
  gap: '16px',
});

export const emblaSlide = style({
  flex: '0 0 300px', // 슬라이드 너비 고정
  height: '200px', // 슬라이드 높이 고정
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

// 카드 전체 스타일
export const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // 요소들 간 간격 균등
  alignItems: 'center',
  width: '100%',
  height: 'fit-content',
  padding: '16px',
  boxSizing: 'border-box', // 패딩 포함 크기 계산
  textAlign: 'center',
});

// 타이틀 스타일 (고정 높이)
export const cardTitle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '24px', // 고정 높이 설정
});

// 설명 스타일 (최대 3줄로 제한)
export const cardDescription = style({
  fontSize: '0.875rem',
  color: '#666',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3, // 최대 3줄 표시
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '60px', // 최소 높이 설정
  marginBottom: '8px',
});

// 스타 영역 스타일 (고정 높이)
export const cardStars = style({
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px', // 고정 높이 설정
  marginBottom: '8px',
});
