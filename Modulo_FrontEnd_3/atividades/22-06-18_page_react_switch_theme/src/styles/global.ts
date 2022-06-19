import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  html,body {
    background: ${props => props.theme.colors.background.primary};


    color: ${props => props.theme.colors.text.primary};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
