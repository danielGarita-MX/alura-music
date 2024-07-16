import styled from "styled-components";
import { MdDelete, MdEdit } from "react-icons/md";
/*
  * Componente para mostrar los videos
*/

// Componente estilizado
const StyledVideo = styled.div`
  width: 24rem;
  height: 15.4rem;

  border: ${props => props.$bg_color ? `0.2rem solid ${props.$bg_color}` : 'none'};
  border-radius: 0.8rem;

  // Estilos para el video
  iframe {
    border-radius: 0.8rem 0.8rem 0 0;

    box-sizing: border-box;
  }

  // Estilos par el el contenedor de botones
  span {
    display: flex;
    justify-content: space-around;
    padding: 1rem 1rem;

    box-sizing: border-box;

    background-color: var(--black-color);
    
    border-radius: 0 0 0.8rem 0.8rem;
    border-top: ${props => props.$bg_color ? `0.2rem solid ${props.$bg_color}` : 'none'};

    margin: 0;

    // Estilos para los botones
    .video-button {
      display: flex;
      align-items: center;
      gap: 5px;

      box-sizing: border-box;

      font-size: 1.2rem;

      background: transparent;

      border: none;

      color: var(--white-color);

      cursor: pointer;

      transition: all 0.3s ease;
    }

    .delete:hover {
      color: var(--lightcoral-color);
    }

    .update:hover {
      color: var(--lightgreen-color);
    }
  }
`

export default function VideoIndex({url, titulo, $bg_color}) {
  return (
    <StyledVideo $bg_color={$bg_color}>
      <iframe width="100%" height="184px" src={url} title={titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

      <span>
        <button className="video-button delete"> <MdDelete /> Borrar</button>
        
        <button className="video-button update"><MdEdit />Editar</button>
      </span>
    </StyledVideo>
  );
}