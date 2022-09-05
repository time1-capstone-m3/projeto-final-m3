import styled from 'styled-components';

export const Container = styled.div`
    div[role='menu'] {
        visibility: hidden;
    }
    div[role='menu'].visible {
        visibility: visible;
    }
`;
