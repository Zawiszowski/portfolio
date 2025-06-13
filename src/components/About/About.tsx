import React from 'react';
import { SectionTitle, Section, Container  } from '../../styles/Generic.styles';
import { AboutGrid, AboutImage } from './About.styles';
import { personalInfo } from '../../data/portfolio';


const About: React.FC = () => {
  return (
    <Section id="about" bg="#f8fafc">
      <Container>
        <SectionTitle>O mnie</SectionTitle>
        <AboutGrid>
          <AboutImage>
            👨‍💻
          </AboutImage>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2563eb' }}>
              {personalInfo.title}
            </h3>
            {personalInfo.about.map((item) => (
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>{item.paragraph}</p>
            ))}
          </div>
        </AboutGrid>
      </Container>
    </Section>
  );
};

export default About;