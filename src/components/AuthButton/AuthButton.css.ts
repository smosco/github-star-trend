import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const userName = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#4B5563',
});

export const button = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  borderRadius: '0.375rem',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
  border: '1px solid transparent',
  outline: 'none',
});

export const signInButton = style([
  button,
  {
    backgroundColor: '#E5E7EB',
    color: '#111827',
    ':hover': {
      backgroundColor: '#cecfd3',
      cursor: 'pointer',
    },
  },
]);

export const signOutButton = style([
  button,
  {
    backgroundColor: '#E5E7EB',
    color: '#111827',
    ':hover': {
      backgroundColor: '#cecfd3',
      cursor: 'pointer',
    },
  },
]);
