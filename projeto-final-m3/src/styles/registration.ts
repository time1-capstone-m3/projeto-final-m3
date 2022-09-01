import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 590px;
  display: flex;
  flex-direction: column;

  form {
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  label {
    color: var(--grey-4);
    font-weight: 600;
    margin: 25px 240px -37px -33px;
  }

  .labelState {
    margin: 19px 240px 5px -23px;
  }

  input {
    height: 51px;
    margin-top: 40px;
  }

  button {
    width: 219px;
    height: 51px;
    border: 1px solid var(--grey-4);
    border-radius: 30px;
    margin-top: 40px;
    background-color: var(--grey-4);
    color: #f0f0f0;
  }
`;

export default Container;
