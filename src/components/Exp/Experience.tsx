import React from "react";
import { experiences } from "../../data/portfolio";
import { Section, SectionTitle, Container } from "../../styles/Generic.styles";
import { TimelineContainer, TimelineItem, ExperienceCard, CompanyName, Position, Location, Period, TaskList } from "./Experience.style";

const Experience: React.FC = () => {
//   const experiences: Experience[] = [
//     {
//       company: "AutoSoft Solutions",
//       position: "Senior Software Engineer",
//       period: "2022 - obecnie",
//       location: "Warszawa, Polska",
//       description: [
//         "Prowadzenie zespołu 4 programistów w projektach automotive IoT",
//         "Architektura i implementacja mikrousług w Django i FastAPI",
//         "Integracja z systemami telematycznymi pojazdów (CAN bus, OBD-II)",
//         "Optymalizacja wydajności baz danych obsługujących 10M+ rekordów dziennie",
//         "Implementacja CI/CD pipeline z Docker i Kubernetes"
//       ],
//       technologies: ["Django", "FastAPI", "React", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
//     },
//     {
//       company: "FleetTrack Technologies",
//       position: "Full Stack Developer",
//       period: "2020 - 2022",
//       location: "Kraków, Polska",
//       description: [
//         "Rozwój platformy zarządzania flotą dla 500+ przedsiębiorstw",
//         "Implementacja real-time tracking z wykorzystaniem WebSocket",
//         "Tworzenie responsywnych dashboardów w React z TypeScript",
//         "Integracja z API dostawców map (Google Maps, OpenStreetMap)",
//         "Współpraca z zespołem UX/UI nad optymalizacją interfejsu"
//       ],
//       technologies: ["Django", "React", "TypeScript", "Redis", "PostgreSQL", "Docker"]
//     },
//     {
//       company: "MotoData Systems",
//       position: "Python Developer",
//       period: "2019 - 2020",
//       location: "Gdańsk, Polska",
//       description: [
//         "Tworzenie systemów analizy danych diagnostycznych pojazdów",
//         "ETL pipeline dla przetwarzania danych z czujników automotive",
//         "Automatyzacja testów jednostkowych i integracyjnych",
//         "Współpraca z inżynierami automotive nad specyfikacją wymagań",
//         "Mentoring junior developerów w zakresie best practices"
//       ],
//       technologies: ["Python", "Django", "Pandas", "PostgreSQL", "Docker", "Jenkins"]
//     }
//   ];

  return (
    <Section id="experience" bg="#f8fafc">
      <Container style={{maxWidth: "1600px"}}>
        <SectionTitle>Experience</SectionTitle>
        <TimelineContainer style={{maxWidth: "1300px"}}>
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              isLeft={index % 2 === 0}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <ExperienceCard>
                <CompanyName>{exp.company}</CompanyName>
                <Position>{exp.position}</Position>
                <Period>{exp.period}</Period>
                <Location>{exp.location}</Location>
                
                <TaskList>
                  {exp.description.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </TaskList>
                
                <div>
                  <strong style={{ color: '#333', marginBottom: '0.5rem', display: 'block' }}>
                    Technologies:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: '#e5e7eb',
                          color: '#374151',
                          padding: '0.25rem 0.7rem',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          border: '1px solid #d1d5db'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </Section>
  );
};


export default Experience