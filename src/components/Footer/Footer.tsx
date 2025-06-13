import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.primary};
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="mailto:contact@example.com">
            Email
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © 2025 Portfolio Developer. Wszystkie prawa zastrzeżone.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;