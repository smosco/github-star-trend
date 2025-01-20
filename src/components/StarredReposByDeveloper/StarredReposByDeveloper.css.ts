import { keyframes, style } from '@vanilla-extract/css';

export const contentContainer = style({
  marginTop: '3rem',
});

export const title = style({
  fontSize: '1.875rem',
  fontWeight: 'bold',
  color: '#1F2937',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const subtitle = style({
  fontSize: '1.125rem',
  fontWeight: 'normal',
  color: '#4B5563',
  marginLeft: '0.5rem',
});

export const loaderContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '16rem',
});

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spinner = style({
  width: '3rem',
  height: '3rem',
  border: '5px solid rgba(49, 130, 206, 0.78)',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${rotation} 1s linear infinite`,
});
