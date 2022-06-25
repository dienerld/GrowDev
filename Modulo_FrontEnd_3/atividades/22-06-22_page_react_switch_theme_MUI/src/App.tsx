import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StylesGlobal } from './config/styles/styles';
import { darkTheme, defaultTheme } from './config/styles/themes';
import { Routers } from './Routers';
import { usePersistedTheme } from './utils/usePersistedState';

function App() {
  const [nameTheme, setNameTheme] = usePersistedTheme('@themeMUI', 'light');
  const [theme, setTheme] = useState(nameTheme === 'light' ? defaultTheme : darkTheme);

  const toggleTheme = () => setNameTheme(
    nameTheme === 'light' ? 'dark' : 'light',
  );
  useEffect(() => {
    setTheme(nameTheme === 'light' ? defaultTheme : darkTheme);
  }, [nameTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StylesGlobal />
        <Navbar toggleTheme={toggleTheme} />
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
