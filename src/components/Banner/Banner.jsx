/* Librerias */
import { useContext } from "react";
import styled from "styled-components";

/* Contexto global */
import { GlobalContext } from "../GlobalContext/GlobalContext";

/* Componentes */
import Tag from "../Tag/Tag";
import Loading from "../Loading/Loading";
import Information from "../Information/Information";
import Video from "./Video/Video";

/*
  * Componente de banner para la página principal
*/


// Componente estilizado para el banner
const StyledBanner = styled.div`
  position: relative;
  width: 100vw;

  box-sizing: border-box;

  // Capa para dar opacidad a la imagen
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    max-height: 25rem;

    background-color: rgba(26, 26, 26, 0.7);
  }
  
  // Imagen del banner
  .banner-img {
    width: 100%;
    height: 25rem;
  }

  // Contenido del banner
  .banner-content {
    position: absolute;
    top: 0;
    bottom: 0;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2rem 0;

    padding: 0 5rem;

    box-sizing: border-box;

    // Contenedor para mostrar la categoria y la descripción
    .banner-category-description {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 1rem;

      box-sizing: border-box;
    }
  }
`

export default function Banner(){
  const {datos, categorias} = useContext(GlobalContext);

  return (
    <>
      {/* Renderizado condicional del componente, si los datos ya se obtuvieron, de renderiza el banner, de otra forma se renderiza un '.gif' de cargando */}

      {
        (datos.length > 0 && categorias.length > 0) ? 
          (<StyledBanner>
            <span className="overlay"></span>

            <img src="/images/header-banner.jpg" alt="Banner" className="banner-img" />

            <div className="banner-content">
              <div className="banner-category-description">
                {/* Dato mostrado de forma estática */}
                {
                  categorias.filter(categoria => {
                    return Number(categoria.id) === 1;
                  }).map(categoria => {
                    return <Tag $bg_color={categoria.bg_color} $txt_color={categoria.txt_color} 
                                $esParaBanner key={categoria.id}>
                             <h1>{categoria.nombre}</h1>
                           </Tag>
                  })
                }

                {
                  datos.filter(dato => {
                    return Number(dato.id) === 1;
                  }).map(dato => {
                    return <Information key={dato.id} dato={dato}></Information>
                  })
                }
              </div>

              {
                datos.filter(dato => {
                  return Number(dato.id) === 1;
                }).map(dato => {
                  console.log(dato.url, dato.titulo);
                  return <Video key={dato.id} url={dato.url} titulo={dato.titulo} />
                })
              }
            </div>
          </StyledBanner>)
          :
          (<Loading />)
      }
    </>

  );
}