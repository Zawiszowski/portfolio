import React from 'react';
import { Section, Container, SectionTitle, Grid } from '../../styles/Generic.styles';
import { SkillCard, IconWrapper } from './Skills.styles';
import { skills } from '../../data/portfolio';

const Skills: React.FC = () => {


  return (
    <Section id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <Grid cols={3}>
          {skills.map((skill, index) => (
            <SkillCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <IconWrapper>
                {skill.icon}
              </IconWrapper>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{skill.name}</h3>
              <p style={{ lineHeight: '1.6' }}>{skill.description}</p>
            </SkillCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Skills;