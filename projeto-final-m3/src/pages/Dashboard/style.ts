import styled from 'styled-components';

export const ProductsList = styled.ul`
    width: 100%;
    height: 30%;
    display: flex;
    gap: 46px;

    @media (max-width: 728px) {
        & {
            gap: 0px;
            flex-direction: row;
            overflow: auto;
        }
    }
`;

export const Container = styled.section`
    padding: 0rem 1rem;
    margin: 25px auto;
    max-width: 1100px;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
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
