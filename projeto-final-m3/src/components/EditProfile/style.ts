import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.1);

  .modal {
    width: 402px;
    height: auto;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    background-color: #ffffff;

    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-height: 600px) {
    .modal{
      height: 450px;
    }
  }

  .title {
    width: 402px;
    height: 51px;

    background-color: #4eab3f;

    border-radius: 10px 10px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title h4 {
    display: flex;
    align-items: center;
    gap: 7px;

    margin-left: 20px;

    color: #ffffff;
  }

  .close {
    width: 30px;
    height: 30px;
    margin-right: 17px;

    cursor: pointer;

    color: #ffffff;
  }

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

  .btn {
    margin: 40px auto;

    background-color: #212121;
    color: #ffffff;

    cursor: pointer;
  }
`;

export default Container