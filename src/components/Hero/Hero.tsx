import React from 'react';
import { HeroSection, HeroContent } from './Hero.styles';
import { Container, Title, Subtitle, Button } from '../../styles/Generic.styles';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <Title>Software Engineer</Title>
          <Subtitle>Specialized in Django, React, FastAPI, Python, JavaScript</Subtitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            I build modern web applications in the automotive industry
          </p>
          <Button onClick={() => scrollToSection('projects')}>
            See my projects
          </Button>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero