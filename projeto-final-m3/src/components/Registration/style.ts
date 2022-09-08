import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: fit-content;

  margin: 0px auto;

  display: flex;
  flex-direction: column;

  box-shadow: var(--shadow);

  border-radius: 0 0 10px 10px;

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
    font-size: 0.75rem;

    margin: 20px 285px 5px 15px;
  }

  .labelImg {
    width: 90px;
    margin: 20px 243px 5px 15px;
  }

  .labelState {
    margin: 19px 240px 5px -23px;
  }

  span{
    color: red;
    font-size: 13px;
  }

  input {
    height: 51px;
  }

  button {
    width: 219px;
    height: 51px;
    border: 1px solid var(--grey-4);
    border-radius: 30px;
    margin: 40px 0 40px 0;

    background-color: var(--grey-4);
    color: #f0f0f0;
  }
`;

export default Container;
