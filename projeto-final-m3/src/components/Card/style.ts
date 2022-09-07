import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: #ffffff;
  box-shadow: var(--shadow);
  width: calc(100% / 3 - 2rem);
  height: 23rem;
  list-style: none;
  border-radius: 16px;

  &:hover {
    border: 1px solid black;
    transition: 0.2s;
    scale: 1.02;
    cursor: pointer;
    .div-text {
      background-color: var(--color-primary);
      transition: 0.2s;
      .state {
        color: #fff;
        font-weight: bolder;
      }
    }
  }
  @media (max-width: 728px) {
    & {
      min-width: 257px;
      margin: 10px 0px 10px 10px;
    }
  }

  .imgProduct {
    height: 12.5rem;
    width: 12.5rem;
  }

  .div-img {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 49px 0px 15px 0px;
  }
  .iconLocation {
    margin-left: 8px;
  }
  .div-loc-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .div-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: var(--grey-4);
    gap: 8px;
    margin: 0.5rem;
    border-radius: 8px;
    height: 6rem;
    p {
      margin-left: 1rem;
      font-size: 15px;
      color: #ffffff;
    }
    .state {
      color: var(--grey-3);
    }
  }
`;
