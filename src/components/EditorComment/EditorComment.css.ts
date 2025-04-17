import { style } from '@vanilla-extract/css';

export const section = style({
  marginTop: '3rem',
  marginBottom: '3rem',
  backgroundColor: '#1f2937', // gray-800
  borderRadius: '0.5rem',
  padding: '2rem',
  border: '1px solid #374151', // gray-700
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
});

export const icon = style({
  flexShrink: 0,
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '9999px',
  background: 'linear-gradient(to right, #f59e0b, #ec4899)', // yellow-500 to pink-500
  color: '#000',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.25rem',
});

export const content = style({
  marginLeft: '1rem',
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: '0.75rem',
  background: 'linear-gradient(to right, #facc15, #ec4899)', // yellow-400 to pink-500
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});

export const comment = style({
  color: '#d1d5db', // gray-300
  lineHeight: 1.6,
  whiteSpace: 'pre-line',
});
