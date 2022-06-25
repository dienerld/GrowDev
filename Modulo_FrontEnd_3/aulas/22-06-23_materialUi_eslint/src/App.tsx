import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { StylesGlobal } from './config/styles/styles';
import { darkTheme } from './config/styles/themes';
import { Routers } from './Routers';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <StylesGlobal/>
        <Routers/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
