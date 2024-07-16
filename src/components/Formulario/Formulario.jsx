/* Librerias */
import styled from "styled-components";
import { useContext } from "react";

/* Componentes y contextos */
import CampoEntrada from "./CampoEntrada/CampoEntrada.jsx";
import CampoOpciones from "./CampoOpciones/CampoOpciones.jsx";
import Boton from "./Boton/Boton.jsx";
import { GlobalContext } from "../GlobalContext/GlobalContext.jsx";
import { usaAPI } from "../../api/useAPI.js";

/*
  * Componente de formulario
*/

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
  // Datos a enviar
  const { hayNuevosDatos, setHayNuevosDatos } = useContext(GlobalContext);

  // Envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let datosNuevos = {
      titulo: e.target[0].value,
      artista: e.target[1].value,
      categoria: e.target[4].value,
      duracion: e.target[2].value,
      url: e.target[3].value
    }

    usaAPI.postAPI('/musica', datosNuevos);
    setHayNuevosDatos(!hayNuevosDatos);
  }


  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div className="form-inputs-container">
          <CampoEntrada
            label="Titulo"
            name="campo-titulo"
            placeholder="Ingresa el titulo de la canción"
            autofocus
            required>

          </CampoEntrada>

          <CampoEntrada
            label="Artista(s)"
            name="campo-artista"
            placeholder="Separados por coma"
            required>

          </CampoEntrada>

          <CampoEntrada
            label="Duración"
            name="campo-duracion"
            placeholder="Duración en minutos"
            required>

          </CampoEntrada>

          <CampoEntrada
            label="Enlace"
            name="campo-enlace"
            placeholder="Ingresa el enlace (solo youtube)"
            required>

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