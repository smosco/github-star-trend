import { style } from '@vanilla-extract/css';

export const wrapper = style({
  minHeight: '100vh',
  backgroundColor: '#0f172a', // gray-950
  color: '#fff',
});

export const container = style({
  maxWidth: '1024px',
  margin: '0 auto',
  padding: '3rem 1rem',
});

export const heroSection = style({
  textAlign: 'center',
  marginBottom: '4rem',
});

export const title = style({
  fontSize: '3rem', // text-5xl
  fontWeight: 700,
  marginBottom: '1rem',
  background: 'linear-gradient(to right, #facc15, #ec4899, #3b82f6)', // yellow → pink → blue
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});

export const description = style({
  fontSize: '1.25rem', // text-xl
  color: '#d1d5db',
  maxWidth: '768px',
  margin: '0 auto',
  lineHeight: 1.7,
});
