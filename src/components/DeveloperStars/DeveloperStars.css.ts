import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '3rem',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // 양 끝 정렬
  marginBottom: '1.5rem',
});

export const avatarLink = style({
  display: 'block',
  textDecoration: 'none',
});

export const avatar = style({
  borderRadius: '50%',
  marginRight: '1rem',
});

export const headerContent = style({
  flex: 1, // 헤더 내용이 넓이를 차지하도록 설정
  marginLeft: '1rem',
});

export const followButton = style({
  marginLeft: 'auto', // 오른쪽 끝으로 이동
});

export const name = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#1a202c',
  margin: 0,
});

export const bio = style({
  fontSize: '0.875rem',
  color: '#4a5568',
  margin: 0,
});

export const repoContainer = style({
  marginBottom: '1rem',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  backgroundColor: '#f9fafb',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  selectors: {
    '&:hover': {
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    },
  },
});

export const repoHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
});

export const repoLink = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#3182ce',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const repoDate = style({
  fontSize: '0.875rem',
  color: '#718096',
});

export const repoDescription = style({
  fontSize: '0.875rem',
  color: '#4a5568',
  marginBottom: '0.75rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const repoMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '0.75rem',
  color: '#718096',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#a0aec0',
    },
  },
});

export const languageBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const languageColor = style({
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
});

export const starContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: '#ecc94b',
});
