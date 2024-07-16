import styled from "styled-components";

/*
  * Componente que muestra un '.gif' de carga cuando un componente no esta listo para ser renderizado
*/

// Estilos del componente
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
`

export default function Loading() {
  return (
    <StyledLoading>
      <img src="/images/cargando.gif" alt="Cargando datos..." />
    </StyledLoading>
  );
}
