import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: '1.875rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
});

export const loaderContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '16rem',
});

export const spinner = style({
  animation: 'spin 1s linear infinite',
  borderRadius: '50%',
  height: '3rem',
  width: '3rem',
  borderTop: '0.25rem solid #4299e1',
  borderBottom: '0.25rem solid #4299e1',
  borderLeft: '0.25rem solid transparent',
  borderRight: '0.25rem solid transparent',
});

export const contentContainer = style({
  marginTop: '3rem',
});
