import styled from "styled-components";

const FormContainer = styled.div`
  min-width: 424px;
  max-width: 528px;
  padding: 26px;
  border-radius: 20px;
`

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  button {
    margin-top: 16px;
  }
`

export {FormContainer, FormContent}