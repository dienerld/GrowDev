import styled from 'styled-components';

type ContainerSectionProps = {
  height?: string;
  width?: string;
}

export const ContainerSection = styled.section<ContainerSectionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '40%'};
  width: ${props => props.width || '100%'};
  background: url("assets/ocean.jpg") no-repeat center;

  h2 {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
  }
`;
