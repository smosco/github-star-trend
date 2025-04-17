import { style } from '@vanilla-extract/css';

export const section = style({
  paddingTop: '2rem',
  paddingBottom: '2rem',
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const empty = style({
  fontSize: '0.95rem',
  color: '#999',
  marginTop: '0.5rem',
});

export const list = style({
  listStyle: 'none',
  paddingLeft: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const item = style({
  fontSize: '1rem',
  lineHeight: 1.5,
});

export const repoLink = style({
  color: '#0070f3',
  fontWeight: 500,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const count = style({
  color: '#888',
  fontSize: '0.875rem',
  marginLeft: '0.5rem',
});

export const curatorList = style({
  fontSize: '0.875rem',
  color: '#666',
  marginTop: '0.25rem',
});
