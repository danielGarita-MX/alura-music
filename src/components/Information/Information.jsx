/* Librerias */
import styled from "styled-components";

/* Componentes y multimedia */
import { MdAccessTime } from "react-icons/md";

/*
  * Componente para mostrar la información en el banner
*/

const StyledInformation = styled.div`
  color: var(--white-color);
  background-color: rgba(26, 26, 26, 0.3);
  padding: 0 1rem;

  p {
    display: flex;
    align-items: center;


    .header-text-title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .header-text {
      font-size: 1rem;
    }
  }
`

export default function Information({ dato }) {
  const { titulo, artista, duracion } = dato;

  return (
    <StyledInformation>
      <p>
        <span className="header-text-title">Titulo: {titulo}</span>
      </p>

      <p>
        <span className="header-text">Artista: {artista}</span> 
      </p>

      <p>
        <MdAccessTime className="header-text" />

        <span className="header-text">&nbsp;Duración: {duracion}</span> 
      </p>
    </StyledInformation>
  );
}