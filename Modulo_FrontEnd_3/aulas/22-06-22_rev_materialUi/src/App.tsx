import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StylesGlobal } from './config/styles/styles';
import { darkTheme, defaultTheme } from './config/styles/themes';
import { Routers } from './Routers';
import { usePersistedState } from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('@themeMUI  ', defaultTheme);
  const toggleTheme = () => setTheme(
    theme.palette.mode === defaultTheme.palette.mode
      ? darkTheme : defaultTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StylesGlobal/>
        <Navbar toggleTheme={toggleTheme}/>
        <Routers/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
