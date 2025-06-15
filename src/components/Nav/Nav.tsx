import React from "react";
import { Header, Nav, Logo, NavLinks, NavLink } from "./Nav.styles";
import { Container } from "../../styles/Generic.styles";
import { scrollToSection } from "../../utils/scrollToSection";

const Navigation: React.FC = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  return (
    <Header>
      <Container>
        <Nav>
          <Logo>Tomasz Zawiszowski</Logo>
          <NavLinks>
            <NavLink>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </NavLink>
            <NavLink>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About me
              </a>
            </NavLink>
            <NavLink>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Skills
              </a>
            </NavLink>
            <NavLink>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
                Experience
              </a>
            </NavLink>
            <NavLink>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projekts
              </a>
            </NavLink>
            <NavLink>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </NavLink>
          </NavLinks>
        </Nav>
      </Container>
    </Header>
  );
};


export default Navigation