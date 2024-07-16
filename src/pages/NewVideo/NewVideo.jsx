/* Libreria */
import styled from "styled-components";

/* Componentes */
import Formulario from "../../components/Formulario/Formulario";

/*
  * Página de nuevo video 
*/

const StyledMain = styled.main`
  padding: 1rem 2rem;

  box-sizing: border-box;

  // Estilos de titulo
  .new-video-title {
    font-family: var(--title-font);
    text-align: center;
    color: var(--white-color);
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
  }

  // Estilos de la descripción
  .new-video-description {
    text-align: center;
    color: var(--white-color);
    font-size: 1.2rem;
  }
`

export default function NewVideo() {
  return (
    <StyledMain>
      <h1 className="new-video-title">NUEVO VIDEO</h1>
      <h3 className="new-video-description">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>

      <Formulario />
    </StyledMain>
  );
}