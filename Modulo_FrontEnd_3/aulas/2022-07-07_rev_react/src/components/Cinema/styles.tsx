import styled from 'styled-components';

export const Title = styled.h2 `
    color: ${ props => props.theme.color };
    font-family: 'Arial';
    background: ${ props => props.theme.bg };
`;

export const Year = styled.p `
    color: red;
`;