import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: ${props => props.theme.colors.background.secondary};;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 16px;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text.primary};
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.text.secondary};
    }
  }

`;

export const WrapperSwitch = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`;
