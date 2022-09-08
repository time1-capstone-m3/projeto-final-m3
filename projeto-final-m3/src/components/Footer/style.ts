import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #cecece;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 13px;
  margin-top: 48px;
  p {
    margin: 0;
    padding: 1rem;
    strong {
      margin: 4px;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 10px;
    }
  }
`;
