import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 10px;
    div {
      margin-top: 10px;
    }
  }
  .card-item {
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 1100px;
    margin-top: 15px;
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        margin: 0;
      }
    }
  }
`;
