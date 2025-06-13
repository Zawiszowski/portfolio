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
          <Subtitle>Specjalizuję się w Django, React, FastAPI, Python, JavaScript</Subtitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Tworzę nowoczesne aplikacje webowe w branży automotive
          </p>
          <Button onClick={() => scrollToSection('projects')}>
            Zobacz moje projekty
          </Button>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero