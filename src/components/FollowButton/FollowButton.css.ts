import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  borderRadius: '0.25rem',
  backgroundColor: '#1d4ed8',
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: '#2563eb',
    },
  },
});

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

export const modalButton = style({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  borderRadius: '0.25rem',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  marginTop: '1rem',
  selectors: {
    '&:hover': {
      backgroundColor: '#1d4ed8',
    },
  },
});

export const modalButtonClose = style([
  modalButton,
  {
    backgroundColor: '#9ca3af',
    marginLeft: '0.5rem',
    selectors: {
      '&:hover': {
        backgroundColor: '#6b7280',
      },
    },
  },
]);
