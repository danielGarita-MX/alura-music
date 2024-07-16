import { createGlobalStyle } from "styled-components";

/*
  * Hoja de estilos globales para la aplicación basados en el principio 'mobile-first'
*/

export const GlobalStyles = createGlobalStyle`
  /*
    * Fuentes tipografícas
    * Titulos: "Bebas Neue", sans-serif;
    * Resto de la página: "IBM Plex Sans", sans-serif;
  */

  /*
    * Variables para almacenar los colores principales
  */
  :root {
    --black-color: #1A1A1A; /* Color de fondo del encabezado y del footer */
    --gray-color: #333; /* Color de fondo de la página */
    --title-font: "Bebas Neue", sans-serif; /* Fuente para los titulos */

    --lightgray-color: #ccc; /* Color de fondo de la página */
    --gold-color: #B8860B;
    --white-color: #FFF;
    --lightcoral-color: lightcoral;
    --red-color: #FF0000;
    --lightgreen-color: lightgreen;
  }

  /*
    * Estilos normalizados para todos los navegadores
  */
  html {
    line-height: 1.15;

    -webkit-text-size-adjust: 100%;

    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;

    background-color: var(--gray-color);
  }

  small {
    font-size: 90%;
  }

  button,
  input,
  optgroup,
  select,
  textarea,
  ::placeholder {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
`