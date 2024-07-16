/* Librerias */
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// /* Recursos multimedia */
// import { MdHome, MdAdd } from "react-icons/md";

/*
  * Componente de encabezado
*/

// Componente estilizado para el 'header'
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black-color);

  padding: 0.3rem 2.2rem;
  
  box-sizing: border-box;

  width: 100vw;
  max-width: 100vw;

  border-bottom: 0.31rem solid var(--red-color);

  /* Titulo */
  .header-title {
    font-family: var(--title-font);
    font-size: 2.2rem;
    color: var(--gold-color);
    letter-spacing: 0.2rem;
  }
`

// Componente estilizado para el contenedor de botones
const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

  // Estilos base para los botones
  .header-botton {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 1rem;

    border-radius: 0.5rem;
    border: 0.17rem solid var(--white-color);

    padding: 0.8rem;

    transition: all 0.5s ease;

    text-decoration: none;

    // Manejo del recurso a mostrar dependiendo el dispositivo. Si es 'desktop' o 'tablet' se muestra un texto, si es un móvil se muestra un icono
    .text-in-desktop {
      font-size: 1.1rem;
      font-weight: 500;
      text-align: center;
      color: var(--white-color);
    }

    /* .image-on-mobile {
      	font-size: 1.5rem;
        color: var(--white-color);
    } */
  }

  // Estilos para el botón que se encuentra activo
  .activo {
    box-shadow: inset 0 0 0.31rem var(--gold-color);
    border-color: var(--gold-color);
  }
`

export default function Header(){
  // Uso del 'hook' de 'location' para conocer la ruta actual del navegador y mostrar los estilos de botón
  const  rutaActual = useLocation();

  return (
    <StyledHeader>
      <h1 className="header-title">Alura Music</h1>

      <StyledButtonsContainer>
        <Link to="/" 
              className={`header-botton ${rutaActual.pathname === "/" ? 'activo' : ''}`}>

          {/* <MdHome className="image-on-mobile" /> */}
          
          <p className="text-in-desktop">Inicio</p>
        </Link>

        <Link to="./nuevo-video" 
              className={`header-botton ${rutaActual.pathname === "/nuevo-video" ? 'activo' : ''}`}>
          
          {/* <MdAdd className="image-on-mobile" /> */}

          <p className="text-in-desktop">Nuevo video</p>
        </Link>
      </StyledButtonsContainer>
    </StyledHeader>
  );
}