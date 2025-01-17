import { style } from '@vanilla-extract/css';

export const button = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const icon = style({
  color: '#FFD700',
  transition: 'color 0.2s ease',
});
