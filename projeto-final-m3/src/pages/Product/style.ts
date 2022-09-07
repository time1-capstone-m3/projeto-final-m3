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

  .details-section {
    max-width: 528px;
  }

  .flex-column {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
`;

export default PeoductPageContainer;
