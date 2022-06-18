import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import { Navbar } from './components/Navbar';
import { Routers } from './Routers';
import { usePersistedState } from './utils/usePersistedState';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme', light);

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
