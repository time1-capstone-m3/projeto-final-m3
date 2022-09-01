import styled from "styled-components";

const Container = styled.div`
  width: 402px;
  height: 369px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  box-shadow: var(--shadow);

  border-radius: 0 0 10px 10px;

  form {
    height: 310px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;
  }

  input {
    width: 345px;
    height: 49px;
  }

  label {
    color: var(--grey-4);
    font-weight: 600;

    margin: 20px 285px 5px 15px;
  }

  span {
  }

  button {
    width: 219px;
    height: 51px;

    border: 1px solid var(--grey-4);
    border-radius: 30px;
    margin-top: 40px;
  }
`;

export default Container