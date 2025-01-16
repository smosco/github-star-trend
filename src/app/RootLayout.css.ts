import { style } from '@vanilla-extract/css';

export const body = style({
  minHeight: '100vh',
  backgroundColor: '#f7fafc',
  color: '#1a202c',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1a202c',
      color: '#f7fafc',
    },
  },
});

export const main = style({
  padding: '2rem 1rem',
  '@media': {
    '(min-width: 640px)': {
      padding: '2rem 1.5rem',
    },
    '(min-width: 1024px)': {
      padding: '2rem 2rem',
    },
  },
});

export const container = style({
  maxWidth: '56rem',
  margin: '0 auto',
});
