import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '2rem 1rem',
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

export const emblaContainer = style({
  overflow: 'hidden',
});

export const emblaSlides = style({
  display: 'flex',
  margin: '0 -1rem',
});

export const slide = style({
  flex: 'none',
  width: '100%',
  '@media': {
    '(min-width: 640px)': {
      width: '50%',
    },
    '(min-width: 768px)': {
      width: '33.3333%',
    },
    '(min-width: 1024px)': {
      width: '25%',
    },
  },
  padding: '0 1rem',
  marginBottom: '2rem',
});

export const card = style({
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const cardContent = style({
  padding: '1.5rem',
  flexGrow: 1,
});

export const cardTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#1F2937',
  marginBottom: '0.5rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const cardDescription = style({
  color: '#4B5563',
  marginBottom: '1rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const cardFooter = style({
  padding: '1rem 1.5rem',
  backgroundColor: '#F9FAFB',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const star = style({
  color: '#F59E0B',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
});

export const link = style({
  color: '#3B82F6',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#2563EB',
  },
});

export const starIcon = style({
  width: '1.25rem',
  height: '1.25rem',
  marginRight: '0.25rem',
});
