import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyle from './styles/global';
import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { Navbar } from './Navbar';
import { Routers } from './Routers';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>

    <GlobalStyle/>
    <BrowserRouter>
        <Navbar toggleTheme={toggleTheme}/>
      <Routers/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
