import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  width: 13.313rem;

  .container-user {
    margin: 0;
    padding: 0;
  }
  .invisible {
    visibility: hidden;
    opacity: 0;
  }
  .visible {
    box-shadow: var(--shadow);
    border-radius: 10px;

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
    margin: 0;
    background-color: transparent;
    color: white;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .img-user {
    margin: 0;
    object-fit: cover;
    width: 45px;
    height: 45px;
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
  .button-container-user {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nome-user {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 9px;

    p {
      max-width: 10ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
