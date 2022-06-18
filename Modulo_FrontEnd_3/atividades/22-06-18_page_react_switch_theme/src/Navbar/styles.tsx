import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: ${props => props.theme.colors.background.secondary};;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

`;
