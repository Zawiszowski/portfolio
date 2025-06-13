import React from 'react';
import { projects } from '../../data/portfolio';
import { Section, Container, Grid, SectionTitle } from '../../styles/Generic.styles';
import { ProjectCard } from './Projects.styles';

const Projects: React.FC = () => {


  return (
    <Section id="projects" bg="#f8fafc">
      <Container>
        <SectionTitle>Projekty</SectionTitle>
        <Grid cols={1}>
          {projects.map((project, index) => (
            <ProjectCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2563eb' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7', color: '#555' }}>
                {project.description}
              </p>
              <div>
                <strong style={{ color: '#333', marginBottom: '0.5rem', display: 'block' }}>
                  Technologie:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: '#2563eb',
                        color: 'white',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Projects;