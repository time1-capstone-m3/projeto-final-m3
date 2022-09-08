import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #4eab3f;
  width: 100%;
  height: auto;
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;

  @media (max-width: 730px){

      height: 15.5rem;

  }


  img {
    object-fit: cover;
    margin: 0;
    width: 163px;
    height: 43px;
    cursor: pointer;
    transition: 0.2s;
    @media (max-width: 320px) {
      width: 50%;
    }
  }

  img:hover {
    scale: 1.02;
  }

  .header-div {
    width: 100%;
    max-width: 1100px;
    display: flex;
    height: 50px;
    justify-content: space-between;

    @media (max-width: 730px) {
      display: flex;
      gap: 1rem;
      flex-direction: column;
    }

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

      @media (max-width: 770px) {
        margin-left: 2.5rem;
      }

      @media (max-width: 425px) {
        width: 100%;
        margin-left: 0;
      }
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
