import styled from "styled-components";

export const ContainerButtons = styled.div`
  box-sizing: border-box;
  margin: 0 0 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  border-radius: 10px;
  height: 63px;
  width: 100%;
  max-width: 1100px;
  padding: 0 10px;

  @media (max-width: 730px) {
    display: flex;
    margin-top: 2rem;
    height: 3rem;
    font-size: 16px;
    overflow-x: scroll;
  }

  div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    background: none;
    color: #5f5d5d;
    padding: 0;
  }

  .button-donate {
    background-color: var(--grey-4);
    color: white;
    height: 2.5rem;
    box-sizing: border-box;
    width: 200px;
    font-size: 12px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    @media (max-width: 730px) {
      width: 83%;
      top: 12rem;
      left: 2rem;
      position: absolute;
    }
    @media (max-width: 320px) {
      width: 80%;
    }
  }

  .button-donate:hover {
    background-color: var(--grey-3);
    box-shadow: var(--shadow);
  }
`;
