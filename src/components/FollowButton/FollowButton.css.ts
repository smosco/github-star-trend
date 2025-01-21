import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  borderRadius: '0.375rem',
  border: '1px solid #d1d5db',
  backgroundColor: '#f9fafb',
  color: '#111827',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#e5e7eb',
  },
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: '#e5e7eb',
    color: '#9ca3af',
  },
});
