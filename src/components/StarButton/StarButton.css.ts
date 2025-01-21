import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  gap: '0.5rem',
  borderRadius: '0.375rem',
  border: '1px solid #E2E8F0',
  backgroundColor: '#FFFFFF',
  color: '#1A202C',
  fontSize: '0.875rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#F7FAFC',
      borderColor: '#CBD5E0',
    },
    '&:disabled': {
      backgroundColor: '#EDF2F7',
      color: '#A0AEC0',
      cursor: 'not-allowed',
    },
  },
});

export const buttonText = style({
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: 'inherit',
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
