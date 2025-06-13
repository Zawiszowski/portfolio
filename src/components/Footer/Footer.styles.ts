import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: ${theme.spacing.lg} 0;
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const FooterText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.base};
  line-height: 1.6;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.md};
  }
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: ${theme.fontSizes.base};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Copyright = styled.div`
  margin-top: ${theme.spacing.sm};
  padding-top: ${theme.spacing.sm};
  border-top: 1px solid ${theme.colors.border};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.small};
`;

export const Footer = styled.footer`
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;