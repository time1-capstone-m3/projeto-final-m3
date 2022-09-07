import styled from "styled-components";

export const ContainerCardPerfil = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #ffffff;
  box-shadow: var(--shadow);
  width: 100%;
  height: 15rem;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 25px;
  padding: 2rem;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 3rem;

  div {
    width: 12rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  .icone-location {
    width: 20px;
    height: 20px;
    color: black;
  }

  .buttonPerfil {
    margin-top: 1rem;
    height: 3rem;
    font-size: 14px;
    width: 100%;
    background-color: black;
    color: white;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 25rem;
  }
`;
