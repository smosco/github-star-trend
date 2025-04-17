import { style } from '@vanilla-extract/css';

export const body = style({
  minHeight: '100vh',
  backgroundColor: '#0f172a',
  color: '#fff',
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
