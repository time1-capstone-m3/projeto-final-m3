import styled from 'styled-components';
export const CardPrincipalLi = styled.li`
    display: flex;
    flex-direction: row;

    background-color: #ffffff;
    box-shadow: var(--shadow);
    width: 100%;
    height: 15rem;
    list-style: none;
    border-radius: 20px;

    margin-bottom: 25px;

    &:hover {
        border: 1px solid black;
        transition: .2s;
        scale: 1.05;
        cursor: pointer;
    }

    .div-img {
        margin: 20px 0px 15px 0px;
    }
    .div-text {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
        margin: 29px 50px;
    }
    .div-loc-icon {
        display: flex;
        height: 40%;
        align-items: flex-end;
    }
`;

export default CardPrincipalLi;
