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
  padding: 16px 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }

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

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }

`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  list-style: none;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

type LiProps = {
  isDot?: boolean;
}

export const Li = styled.li<LiProps>`
  display: flex;
  flex-direction: row;
  margin-right: 16px;

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

  @media (max-width: 600px) {
    margin-top: 8px;
  }

`;
