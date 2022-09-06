import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #4eab3f;
  width: 100%;
  height: 11rem;
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;

  img {
    margin: 0;
    width: 163px;
  }

  .header-div {
    width: 100%;
    max-width: 1100px;
    display: flex;
    height: 50px;
    justify-content: space-between;

    input {
      margin: 0;
      padding: 0.5rem;
      border-radius: 18px 0 0 18px;
      width: 20rem;
      height: 2rem;
    }

    .container-search {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 352px;
    }

    .icon-search {
      background-color: white;
      height: 2rem;
      width: 2rem;
      border-radius: 0 18px 18px 0;
      padding: 5px;
      color: gray;
    }
  }
`;
