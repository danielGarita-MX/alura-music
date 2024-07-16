/*
  * Componente de formulario
*/

import styled from "styled-components";
import CampoEntrada from "./CampoEntrada/CampoEntrada.jsx";
import CampoOpciones from "./CampoOpciones/CampoOpciones.jsx";
import Boton from "./Boton/Boton.jsx";

const StyledForm = styled.form`
  padding: 2.4rem 6rem;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  .form-inputs-container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .form-buttons-container {
    width: 100%;
    
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
`

export default function Formulario() {

  return (
    <>
      <StyledForm>
        <div className="form-inputs-container">
          <CampoEntrada
            label="Titulo"
            name="campo-titulo"
            placeholder="Ingresa el titulo de la canción"
            autofocus>

          </CampoEntrada>

          <CampoEntrada
            label="Artista(s)"
            name="campo-artista"
            placeholder="Separados por coma">

          </CampoEntrada>

          <CampoEntrada
            label="Duración"
            name="campo-duracion"
            placeholder="Duración en minutos">

          </CampoEntrada>

          <CampoEntrada
            label="Enlace"
            name="campo-enlace"
            placeholder="Ingresa el enlace (solo youtube)"
            >

          </CampoEntrada>

          <CampoOpciones
            label="Selecciona una categoria"></CampoOpciones>
        </div>

        <div className="form-buttons-container">
          <Boton type="submit">Enviar</Boton>

          <Boton type="reset">Limpiar</Boton>
        </div>
      </StyledForm>
    </>
  );
}