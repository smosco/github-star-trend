import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
});

export const viewport = style({
  overflow: 'hidden',
  width: '100%',
  cursor: 'grab',
  selectors: {
    '&:active': {
      cursor: 'grabbing',
    },
  },
});

export const container = style({
  display: 'flex',
});

export const slide = style({
  flex: '0 0 80%',
  padding: '1rem',
  scrollSnapAlign: 'start',
  '@media': {
    'screen and (min-width: 768px)': {
      flex: '0 0 50%',
    },
    'screen and (min-width: 1024px)': {
      flex: '0 0 33.3333%',
    },
  },
});

export const card = style({
  border: '1px solid #ddd',
  borderRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
  textAlign: 'center',
});

export const navButton = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid #ccc',
  borderRadius: '9999px',
  padding: '0.5rem',
  cursor: 'pointer',
});

export const prevButton = style([navButton, { left: '0.5rem' }]);
export const nextButton = style([navButton, { right: '0.5rem' }]);

export const dots = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '0.5rem',
});

export const dot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  transition: 'background-color 0.2s ease-in-out',
});

export const dotActive = style([
  dot,
  {
    backgroundColor: '#333',
  },
]);
