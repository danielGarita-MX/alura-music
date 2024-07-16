import styled from "styled-components";

/*
  * Componente para mostrar el video del banner
*/

const StyledVideo = styled.div`
  width: 40rem;
  height: 100%;

  // Estilos del video
  iframe {
    border-radius: 0.7rem;
  }
`

export default function Video({url, titulo}){
  return (
    <StyledVideo>
      <iframe width="100%" height="100%" src={url} title={titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    </StyledVideo>
  );
}