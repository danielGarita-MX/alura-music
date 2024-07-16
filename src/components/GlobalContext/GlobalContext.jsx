/* Librerias */
import { createContext, useEffect, useState } from "react";

/* Manejo de la API */
import { usaAPI } from '../../api/useAPI.js'

/*
  * Manejo de contextos globales para la aplicación
*/

export const GlobalContext = createContext(); // Contexto de acceso global

export default function GlobalContextProvider({children}){
  // Almacenamiento y cambio de los datos
  const [datos, setDatos] = useState([]);
  // Almacenamiento y cambio de las categorias
  const [categorias, setCategorias] = useState([]);
  // Datos a enviar que alterna su valor para re-rendirizar los datos mostrados
  const [hayNuevosDatos, setHayNuevosDatos] = useState(false);

  // Obtención de los datos, una vez que se renderiza el componente
  useEffect(() => {
    usaAPI.getAPI('/musica', setDatos); // Obtención de los datos
    usaAPI.getAPI('/categorias', setCategorias); // Obtención de las categorias
  }, [hayNuevosDatos]);

  return (
    <GlobalContext.Provider value={{datos, categorias, hayNuevosDatos, setHayNuevosDatos}}>
      {children}
    </GlobalContext.Provider>
  );
}