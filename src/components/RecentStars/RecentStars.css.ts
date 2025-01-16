import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '16px',
  backgroundColor: '#FAF8F5',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const header = style({
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '16px',
});

export const dateText = style({
  fontSize: '14px',
  color: '#666',
});

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '16px',
});

export const card = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.03)',
  },
});

export const thumbnail = style({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  objectFit: 'cover',
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const repoName = style({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#1E88E5',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const repoDescription = style({
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.4',
});

export const repoDetails = style({
  display: 'flex',
  gap: '16px',
  fontSize: '12px',
  color: '#888',
});
