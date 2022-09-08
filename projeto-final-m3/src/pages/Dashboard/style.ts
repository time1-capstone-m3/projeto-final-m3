import styled from "styled-components";

export const ProductsList = styled.ul`
  width: 100%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.875rem;

  @media (max-width: 728px) {
    & {
      gap: 0px;
      overflow: auto;
      flex-wrap: nowrap;
    }
  }
`;

export const Container = styled.section`
  padding: 0rem 1rem;

  margin: 25px auto;
  max-width: 1100px;

  min-height: 800px;
`;
export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;
export const DivProdutos = styled.div`
  @media (max-width: 728px) {
    & {
      flex-direction: row;
      overflow: auto;
    }
  }
`;
export const DivCardPrincipal = styled.div``;
