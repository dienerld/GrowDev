import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background.primary};
    background: linear-gradient(0deg,
      ${props => props.theme.colors.background.primary} 0%,
      ${props => props.theme.colors.background.tertiary} 100%
    );

    color: ${props => props.theme.colors.text.primary};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
