/*
  * Componente para mostar el botón del formulario
*/

import styled from "styled-components";

const StyledButton = styled.button`
  width: 15rem;
  
  padding: 1rem 1rem;

  border: none;
  border-radius: 0.62rem;

  transition: all 0.3s ease;

  font-size: 1.25rem;
  font-weight: 500;
  
  cursor: pointer;

  background-color: ${props => props.type === "submit" ?
    'var(--lightgreen-color)' : 'var(--lightcoral-color)'};

  &:hover {
    scale: 105%;

    box-shadow: inset 0 0 0.3rem var(--black-color);
  }
`

export default function Boton({type, $styleButton, children}) {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
}