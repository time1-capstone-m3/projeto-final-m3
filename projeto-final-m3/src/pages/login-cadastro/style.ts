import styled from "styled-components";

export const ContainerPai = styled.div`
  display: flex;
  margin: 0 auto;
  
  max-width: 1100px;
  align-items: center;

  .img {
    display: none;
  }

  @media (min-width: 1024px) {
    .img {
      display: block;

      margin-right: 50px;
      margin-top: 170px;
    }
  }

  @media (max-width: 1049px) {
    .img {
      width: 350px;
      height: 350px;
    }
  }

  @media (min-width: 1050px) {
    .img{
      margin: 0;
    }
    
  }
`;

export const Container = styled.div`
  width: 402px;
  height: 840px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  transition: .3s;

  img {
    padding: 50px 0;
  }

  .buttonInitial {
    width: 205px;
    height: 51px;
    margin: 0 0 5px 0;

    border-radius: 0px 10px 0px 0px;
    border-bottom: 3px solid rgba(78, 171, 63, 1);
  }

  button:focus {
    background-color: rgba(78, 171, 63, 1);
    color: #f0f0f0;
  }

  .login {
    border-radius: 10px 0px 0px 0px;
  }

  section {
    width: 402px;
    height: 51px;

    display: flex;
    align-items: center;
  }


`;