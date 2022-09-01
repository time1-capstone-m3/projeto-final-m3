import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 18rem;
  height: 27rem;
  list-style: none;
  border-radius: 16px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #4eab3f;
    margin: 0.5rem;
    border-radius: 8px;
    height: 6rem;
    p {
      margin-left: 1rem;
      font-size: 15px;
      color: #ffffff;
    }
    .state {
      color: black;
    }
  }
`;
