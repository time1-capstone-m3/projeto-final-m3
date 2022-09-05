import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 9px;
    position: relative;

    .container-user{
        margin: 0;
    }

    .invisible {
        visibility: hidden;
        opacity: 0;
    }
    .visible {
        visibility: visible;
        position: absolute;
        right: 0px;
        z-index: 99;
        height: 7.313rem;
        width: 13.313rem;
        opacity: 1;
        background-color: white;
        display: flex;
        gap: 9px;
        flex-direction: column;
        align-items: center;
        padding: 10px 5px;
        margin-top: 9px;

        border-radius: 10px;
    }

    .button-user {
        background-color: transparent;
        color: white;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 9px;
        /* margin-top: 9px; */
    }
    .img-user {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 2px solid white;
    }
    .linknav-top {
        margin-top: 22px;
        color: white;
    }
    .linknav-top:hover {
        text-decoration: underline;
    }
    .button-container-user{
        margin-left: 15px;
        display:flex;
        align-items: center;
    }
    .nome-user{
        display: flex;
        align-items: center;
        gap: 9px;
    }
`;
export const LinkNav = styled(Link)`
    color: black;
    text-decoration: none;
    display: flex;
    gap: 9px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    &:hover {
        color: white;
    }
`;
export const Button = styled.button`
    background-color: var(--grey-1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 92%;
    height: 2.875rem;
    margin: 0;

    border-radius: 5px;
    padding: 0;

    &:hover {
        background-color: var(--grey-4);
        color: white;
    }
`;
