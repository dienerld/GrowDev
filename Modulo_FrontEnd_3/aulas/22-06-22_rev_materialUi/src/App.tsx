import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StylesGlobal } from './config/styles/styles';
import { darkTheme, defaultTheme } from './config/styles/themes';
import { Routers } from './Routers';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <StylesGlobal/>
        <Navbar/>
        <Routers/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
