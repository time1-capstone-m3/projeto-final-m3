import styled from "styled-components";

const DesapegoContainer = styled.main`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;

  .content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    img {
      width: 500px;
    }
  }

  .form-section {
    max-width: 528px;
  }

  .flex-column {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
`;

export default DesapegoContainer;
