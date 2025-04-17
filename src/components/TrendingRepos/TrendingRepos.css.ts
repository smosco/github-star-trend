import { style } from '@vanilla-extract/css';

export const section = style({
  marginTop: '3rem',
  marginBottom: '3rem',
});

export const heading = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(to right, #facc15, #ec4899)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});

export const icon = style({
  marginRight: '0.5rem',
  color: '#fff',
});

export const empty = style({
  textAlign: 'center',
  padding: '2rem 0',
  color: '#9ca3af',
});

export const repoList = style({
  backgroundColor: '#1f2937',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  border: '1px solid #374151',
});

export const repoItem = style({
  padding: '1.25rem',
  borderBottom: '1px solid #374151',
  selectors: {
    '&:hover': {
      backgroundColor: '#374151',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const repoRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
});

export const repoName = style({
  fontSize: '1.125rem',
  fontWeight: 500,
  color: '#60a5fa',
  selectors: {
    '&:hover': {
      color: '#93c5fd',
    },
  },
});

export const starCount = style({
  marginLeft: '0.5rem',
  color: '#facc15',
});

export const curatorBadge = style({
  fontSize: '0.875rem',
  color: '#f9a8d4',
  backgroundColor: '#374151',
  padding: '0.25rem 0.5rem',
  borderRadius: '9999px',
  border: '1px solid #4b5563',
  display: 'inline-block',
});
