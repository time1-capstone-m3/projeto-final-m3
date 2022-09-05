import styled from 'styled-components';

export const Container = styled.div`
    div[role='menu'] {
        visibility: hidden;
    }
    div[role='menu'].visible {
        visibility: visible;
    }
    button{
      background-color: transparent;
      text-decoration: underline;
      color: white;

      
    }
`;
