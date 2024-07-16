import styled from "styled-components";

/*
  * Componente que muestra las categorias en forma de 'tag'
*/

// Componente estilizado para la 'tag'
const StyledTag = styled.span`
  padding: 1rem 0;

  border-radius: 0.7rem;
  border: none;

  text-align: center;
  font-size: 1.5rem;
  font-family: var(--title-font);
  letter-spacing: 0.2rem;
  font-weight: bold;

  // Estilos para mostrar sobre el 'banner'
  width: ${props => props.$esParaBanner ? "25rem" : "20rem"};

  background-color: ${props => props.$bg_color};

  color: ${props => props.$txt_color};

  // Estilos para los hijos
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`

export default function Tag({ $esParaBanner, $bg_color, $txt_color, children }) {
  return (
    <StyledTag $esParaBanner={$esParaBanner} $bg_color={$bg_color} $txt_color={$txt_color}>
      {children}
    </StyledTag>
  );
}