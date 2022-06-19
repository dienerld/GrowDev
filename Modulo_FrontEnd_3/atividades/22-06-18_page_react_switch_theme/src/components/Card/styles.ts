import styled from 'styled-components';

type ContainerCardProps = {
  isImg: boolean
}

export const ContainerCard = styled.div<ContainerCardProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => (props.isImg ? '0' : '16px')};
  text-align: left;

  img {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 600px) {
    width: 100%;
    padding: 8px;
  }

`;
