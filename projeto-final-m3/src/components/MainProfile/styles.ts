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
    /* padding: 1rem 2rem; */
    div {
      display: flex;
      .btn_profile {
        margin-right: 10px;
        background-color: var(--grey-4);
        padding: 7px 20px;
        border-radius: 20px;
        color: var(--grey-0);
      }
      .btn_profile:hover {
        background-color: var(--color-primary);
      }
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
    }
  }
`;
