import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gap: '1.25rem',
  marginTop: '3rem',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});

export const card = style({
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const avatar = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '9999px',
});

export const username = style({
  fontWeight: 600,
  marginTop: '0.5rem',
  fontSize: '1.1rem',
});

export const highlight = style({
  fontSize: '0.875rem',
  color: '#666',
  marginTop: '0.25rem',
});
