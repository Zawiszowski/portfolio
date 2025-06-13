import styled from "styled-components";
import { slideInLeft } from "../../styles/animations";

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutImage = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  animation: ${slideInLeft} 1s ease-out;
`;