import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: #ffffff;
  box-shadow: var(--shadow);
  width: 250px;
  height: 320px;
  list-style: none;
  border-radius: 16px;
  margin: 10px;
  .imgProduct {
    height: 200px;
    width: 200px;
    min-height: 200px;
    max-width: 200px;
  }
  .div-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 10px 0px;
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
    height: 82px;
    p {
      margin-left: 1rem;
      font-size: 15px;
      color: #ffffff;
      max-width: 10ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .state {
      color: var(--grey-3);
    }
  }
  .div-text-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: var(--color-primary);
    gap: 8px;
    margin: 0.5rem;
    border-radius: 8px;
    height: 82px;
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
