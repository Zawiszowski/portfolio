import React from 'react';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Navigation from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import { GlobalStyle } from './styles/GlobalStyles';
import { Container } from './styles/Generic.styles';
import { Footer } from './components/Footer/Footer.styles';



const App: React.FC = () => {
  // const isScrolled = useScrollAnimation();

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer>
        <Container>
          <p>&copy; 2025 Software Engineer Portfolio. Wszystkie prawa zastrzeżone.</p>
          <p style={{ marginTop: '0.5rem', opacity: '0.8' }}>
            Django • React • Docker • FastAPI • Automotive Solutions
          </p>
        </Container>
      </Footer>
    </>
  );
};

export default App;