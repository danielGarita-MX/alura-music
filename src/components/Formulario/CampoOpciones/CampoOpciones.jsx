import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext.jsx";

/*
  * Componente de campo de opciones para el formulario
*/

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.70rem;

  margin: 1rem 0;
`

const StyledSelect = styled.select`
  background-color: var(--lightgray-color);

  border-radius: 0.8rem;

  outline-color: transparent;

  padding: 0.8rem;

  width: 20rem;

  transition: all 0.3s ease;

  border: none;

  font-size: 1.2rem;
  font-weight: 500;

  margin: 0;

  &:focus {
    background-color: var(--white-color);
  }
`

const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: var(--white-color);
  font-weight: 500;
`

export default function CampoOpciones({name, label}) {
  
  const {categorias} = useContext(GlobalContext);

  return (
    <StyledContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>

      <StyledSelect>
        {
          categorias.map(categoria => {
            return (
              <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
            )
          })
        }
      </StyledSelect>
    </StyledContainer>
  );
}