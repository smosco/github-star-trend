import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#ffffff',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1a202c',
    },
  },
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
});

export const avatar = style({
  borderRadius: '50%',
  marginRight: '1rem',
});

export const name = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#1a202c',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f7fafc',
    },
  },
});

export const bio = style({
  fontSize: '0.875rem',
  color: '#4a5568',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#a0aec0',
    },
  },
});

export const repoContainer = style({
  backgroundColor: '#f9fafb',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#2d3748',
    },
  },
  borderRadius: '0.5rem',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  selectors: {
    '&:hover': {
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-2px)',
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
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#63b3ed',
    },
  },
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const repoDate = style({
  fontSize: '0.875rem',
  color: '#718096',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#a0aec0',
    },
  },
});

export const repoDescription = style({
  fontSize: '0.875rem',
  color: '#4a5568',
  marginBottom: '0.75rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#a0aec0',
    },
  },
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
