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
                O mnie
              </a>
            </NavLink>
            <NavLink>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Umiejętności
              </a>
            </NavLink>
            <NavLink>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projekty
              </a>
            </NavLink>
            <NavLink>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Kontakt
              </a>
            </NavLink>
          </NavLinks>
        </Nav>
      </Container>
    </Header>
  );
};


export default Navigation