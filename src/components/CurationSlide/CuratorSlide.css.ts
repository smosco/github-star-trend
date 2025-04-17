import { style } from '@vanilla-extract/css';

export const section = style({
  marginTop: '3rem',
  marginBottom: '3rem',
});

export const heading = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(to right, #facc15, #ec4899)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});

export const headingIcon = style({
  marginRight: '0.5rem',
  color: '#fff',
});

export const sliderWrapper = style({
  position: 'relative',
});

export const emblaViewport = style({
  overflow: 'hidden',
});

export const emblaContainer = style({
  display: 'flex',
});

export const slide = style({
  flex: '0 0 45%',
  minWidth: 0,
  paddingLeft: '1rem',
  selectors: {
    '&:first-child': {
      paddingLeft: 0,
    },
  },
});

export const card = style({
  backgroundColor: '#1f2937',
  border: '1px solid #374151',
  borderRadius: '0.5rem',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '180px', // 높이 통일
  transition: 'border-color 0.3s ease',
  selectors: {
    '&:hover': {
      borderColor: '#facc15',
    },
  },
});

export const avatar = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '9999px',
  border: '2px solid #facc15',
  objectFit: 'cover',
});

export const name = style({
  fontWeight: 600,
  marginTop: '0.75rem',
  color: '#fff',
});

export const highlight = style({
  fontSize: '0.875rem',
  color: '#ec4899',
  marginTop: '0.25rem',
});

export const navButtonLeft = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '0.5rem',
  borderRadius: '9999px',
  backgroundColor: '#1f2937',
  border: '1px solid #374151',
  color: '#fff',
  selectors: {
    '&:hover': {
      backgroundColor: '#374151',
    },
  },
});

export const navButtonRight = style([
  navButtonLeft,
  {
    left: 'auto',
    right: 0,
    transform: 'translate(50%, -50%)',
  },
]);

export const indicators = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1.5rem',
  gap: '0.5rem',
});

export const dot = style({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '9999px',
  backgroundColor: '#374151',
});

export const dotActive = style([
  dot,
  {
    background: 'linear-gradient(to right, #facc15, #ec4899)',
  },
]);
