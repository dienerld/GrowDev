import styled from 'styled-components';
import { light } from '../../styles/themes/light';

export const ContainerFooter = styled.footer`
  background: ${light.colors.background.primary};
  color: ${light.colors.text.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 32px
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;

  a{
    color: ${light.colors.text.primary};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: ${light.colors.text.secondary};
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  list-style: none;
`;

type LiProps = {
  isDot?: boolean;
}

export const Li = styled.li<LiProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-right: 16px;
  text-align: center;





  ${props => props.isDot && `
    position: relative;
    top: -4px;
  `}

`;

export const WrapperMediaSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: #2626ca;
`;
