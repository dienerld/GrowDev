import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Navbar } from './components/Navbar';
import { StylesGlobal } from './config/styles/styles';
import { defaultTheme, darkTheme } from './config/styles/themes';
import { Routers } from './Routers';

import { persistor, store } from './store';

function App() {
  const [nameTheme, setNameTheme] = useState('dark');
  const [theme, setTheme] = useState(
    nameTheme === 'light' ? defaultTheme : darkTheme,
  );

  const toggleTheme = () => setNameTheme(nameTheme === 'light' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(nameTheme === 'light' ? defaultTheme : darkTheme);
  }, [nameTheme]);

  const pages: string[] = ['Home', 'Profile'];

  return (
    <Provider store={store}>

      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>

          <BrowserRouter>
            <StylesGlobal />
            <Navbar toggleTheme={toggleTheme} pages={pages} />
            <Routers />
          </BrowserRouter>

        </ThemeProvider>
      </PersistGate>

    </Provider>
  );
}

export default App;
