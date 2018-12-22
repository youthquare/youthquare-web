import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: #3b5998;
  border-radius: .25rem;
  color: #fff;
  border: 0;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 1.25rem;
  font-weight: 700;
  transition: transform .25s ease-in-out, box-shadow .25s ease-in-out;
  
  &:hover {
    transform: translateY(-.125rem);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  }
`;
