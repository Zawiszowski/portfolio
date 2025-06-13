export const theme = {
  colors: {
    primary: '#1E40AF',
    secondary: '#1f2937',
    accent: '#F59E0B',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#333',
    textSecondary: '#333',
    border: '#334155',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem',
  },
  fontSizes: {
    small: '0.8rem',
    base: '1rem',
    large: '1.1rem',
    xl: '1.5rem',
    xxl: '2.5rem',
    hero: '3.5rem',
  },
};

export type Theme = typeof theme;