import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StylesGlobal } from './config/styles/styles';
import { darkTheme } from './config/styles/themes/dark';
import { Routers } from './Routers';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <StylesGlobal/>
        <Navbar/>
        <Routers/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
