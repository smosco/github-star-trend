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

export const headingIcon = style({
  marginRight: '0.5rem',
  color: '#fff',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});

export const card = style({
  backgroundColor: '#1f2937',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  border: '1px solid #374151',
  transition: 'box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      boxShadow: '0 0 0 4px rgba(236, 72, 153, 0.1)',
    },
  },
});

export const cardInner = style({
  padding: '1.5rem',
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const profileLink = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  gap: '1rem',
});

export const avatar = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '9999px',
  objectFit: 'cover',
  border: '2px solid #facc15',
});

export const profile = style({
  marginLeft: '1rem',
});

export const username = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#fff',
  selectors: {
    '&:hover': {
      color: '#facc15',
    },
  },
});

export const highlight = style({
  color: '#ec4899',
});

export const bio = style({
  fontSize: '0.875rem',
  color: '#d1d5db',
  marginBottom: '1rem',
});

export const repoTitle = style({
  fontSize: '0.75rem',
  color: '#9ca3af',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem',
});

export const repoList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const repoItem = style({
  borderLeft: '2px solid #facc15',
  paddingLeft: '0.75rem',
});

export const repoName = style({
  color: '#60a5fa',
  fontWeight: 500,
  selectors: {
    '&:hover': {
      color: '#93c5fd',
    },
  },
});

export const repoDesc = style({
  fontSize: '0.875rem',
  color: '#9ca3af',
  marginTop: '0.25rem',
});
