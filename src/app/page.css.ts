import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const description = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '#444',
  maxWidth: '60ch',
  marginBottom: '2rem',
});
