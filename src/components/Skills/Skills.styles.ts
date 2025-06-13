import styled from "styled-components";
import { Card } from "../../styles/Generic.styles";
import { float } from "../../styles/animations";

export const SkillCard = styled(Card)`
  text-align: center;
  
  &:hover {
    background: #2563eb;
    color: white;
  }
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: white;
  animation: ${float} 3s ease-in-out infinite;

`;