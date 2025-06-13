import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { scrollToSection } from '../../utils/scrollToSection';
import { HeaderWrapper, Nav, Logo, NavLinks, NavLink, MobileMenuButton } from './Header.styles';

const Header: React.FC = () => {
  const isScrolled = useScrollAnimation(50);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Nav>
        <Logo onClick={handleLogoClick}>
          JK.dev
        </Logo>
        <NavLinks>
          <li>
            <NavLink onClick={() => scrollToSection('about')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('skills')}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('projects')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>
          </li>
        </NavLinks>
        <MobileMenuButton>
          ☰
        </MobileMenuButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;