/* Librerias */
import styled from "styled-components";
import { useContext } from "react";

/* Componentes */
import Banner from "../../components/Banner/Banner.jsx";
import { GlobalContext } from "../../components/GlobalContext/GlobalContext.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import VideoIndex from "../../components/Video/Video.jsx";

/*
  * Página principal
*/

const StyledMain = styled.main`
  padding: 0 2rem;
  
  box-sizing: border-box;
`

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 2rem 0 4rem 0;
`

const StyledSecondaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
`

export default function Index(){
  const {datos, categorias} = useContext(GlobalContext);

  return (
    <>
      <Banner />

      <StyledMain>
        {
          categorias.map(categoria => {
            return (
                    <StyledContainer>
                      <Tag $bg_color={categoria.bg_color} $txt_color={categoria.txt_color} 
                          $esParaBanner key={categoria.id}>
                        <h1>{categoria.nombre}</h1>
                      </Tag>

                      <StyledSecondaryContainer>
                      {
                        datos.filter(dato => {
                          return Number(dato.categoria) === Number(categoria.id);
                        }).map(dato => {
                          return <VideoIndex key={dato.id} url={dato.url} titulo={dato.titulo}
                                             $bg_color={categoria.bg_color}></VideoIndex>
                        })
                      }
                      </StyledSecondaryContainer>
                    </StyledContainer>
                   )
          })
        }
      </StyledMain>
    </>
  );
}