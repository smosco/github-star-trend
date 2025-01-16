import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#1a202c',
  color: '#edf2f7',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  color: '#63b3ed',
});

export const date = style({
  fontSize: '0.875rem',
  color: '#a0aec0',
  marginBottom: '1.5rem',
});

export const error = style({
  color: '#f56565',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '1.5rem',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
  },
});

export const card = style({
  backgroundColor: '#2d3748',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      boxShadow:
        '0 12px 16px -4px rgba(0, 0, 0, 0.2), 0 6px 8px -2px rgba(0, 0, 0, 0.1)',
      transform: 'scale(1.05)',
    },
  },
});

export const thumbnail = style({
  width: '100%',
  height: '12rem',
  objectFit: 'cover',
});

export const cardContent = style({
  padding: '1rem',
});

export const link = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#63b3ed',
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      color: '#90cdf4',
    },
  },
});

export const description = style({
  fontSize: '0.875rem',
  color: '#a0aec0',
  marginTop: '0.5rem',
  height: '3rem',
  overflow: 'hidden',
});

export const meta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.75rem',
  color: '#718096',
  marginTop: '1rem',
});

export const starContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const starIcon = style({
  width: '1rem',
  height: '1rem',
  marginRight: '0.25rem',
  color: '#ecc94b',
});

export const languageBadge = style({
  padding: '0.25rem 0.5rem',
  backgroundColor: '#4a5568',
  borderRadius: '9999px',
});
