import styled from "styled-components";

/*
  * Componente para el pié de página
*/

const StyledFooter = styled.footer`
  background-color: var(--black-color);
  
  padding: 1rem 0;

  width: 100vw;
  max-width: 100vw;

  box-sizing: border-box;
  
  text-align: center;

  border-top: 0.31rem solid var(--red-color);

  /* Titulo */
  .footer-title {
    font-family: var(--title-font);
    font-size: 2.2rem;
    color: var(--gold-color);
    letter-spacing: 0.2rem;
  }

  .footer-text {
    font-size: 1.1rem;

    color: var(--white-color);
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <h1 className="footer-title">Alura Music</h1>
      <p className="footer-text">&#174; Garita Romero Brandon Daniel</p>
    </StyledFooter>
  );
}