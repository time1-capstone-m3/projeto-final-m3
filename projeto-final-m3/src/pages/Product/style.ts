import styled from "styled-components";

const PeoductPageContainer = styled.main`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 18px;
    max-width: 500px;
  }

  .content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    img {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    margin: 3rem auto;
    flex-direction:  column;
    .content-section {
      display: none;
    }
    .left-section {
      margin-bottom: 32px;
    }
  }

  .product-section {
    min-width: 300px;
    max-width: 588px;
    max-height: 550px;
    padding: 26px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 80px;

    .details-top {
      height: 300px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 6px;
  
      .image-container {
        max-width: 267px;
        height: 100%;
        border-radius: 10px;
        img {
          max-width: 267px;
          height: 100%;
          object-fit: cover;
        }
      }
  
      .infos-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;
        
        span {
          margin-bottom: 15px;
        }
        h3 {
          margin: 20px 0 10px;
        }
        p {
          display: block;
          max-height: 158px;
          overflow-y: auto;
          text-align: right;
        }
      }
    }

    .details-bottom {
      display: flex;
      justify-content: space-between;
      height: 44px;
      width: 100%;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
      }

      button {
        width: 230px;
        padding: 0;
      }
    }
  }
`;

export default PeoductPageContainer;
