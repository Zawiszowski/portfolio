import styled from 'styled-components';
import { fadeInUp } from '../../styles/animations';
import { theme } from '../../styles/theme';

export const ContactSection = styled.section`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xxl} 0;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
    border-radius: 2px;
  }
`;

export const ContactDescription = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${theme.fontSizes.large};
  transition: all 0.3s ease;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(59, 130, 246, 0.1);
    border-color: ${theme.colors.primary};
    transform: translateY(-3px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const ContactIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    background: ${theme.colors.secondary};
    transform: scale(1.1);
  }
`;

export const ContactText = styled.span`
  font-weight: 500;
`;