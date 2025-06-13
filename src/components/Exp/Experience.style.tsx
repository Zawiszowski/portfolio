import styled from "styled-components";
import { fadeInUp } from "../../styles/animations";
import { Card } from "../../styles/Generic.styles";

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #2563eb;
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div<{ isLeft?: boolean }>`
  position: relative;
  width: 50%;
  padding: 2rem;
  ${({isLeft}) => (isLeft ? 'right: 0%;' : 'left: 50%;')}
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    right: 0;
    padding-left: 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    ${props => props.isLeft ? 'right: -14px;' : 'left: -14px;'}
    width: 20px;
    height: 20px;
    background: #2563eb;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 0 4px #2563eb;

    @media (max-width: 768px) {
      left: 10px;
      right: auto;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 2.8rem;
    ${props => props.isLeft ? 'right: 15px;' : 'left: 15px;'}
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${props => props.isLeft 
      ? 'border-left-color: white;' 
      : 'border-right-color: white;'
    }

    @media (max-width: 768px) {
      left: 35px;
      right: auto;
      border-right-color: white;
      border-left-color: transparent;
    }
  }
`;

export const ExperienceCard = styled(Card)`
  margin: 0;
  position: relative;
  
  &:hover {
    transform: none;
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.15);
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.4rem;
  color: #2563eb;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Position = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Period = styled.div`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

export const Location = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

export const TaskList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: #555;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: bold;
    }
  }
`;