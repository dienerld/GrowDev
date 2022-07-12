import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import themeDefault from './config/themes/Default';
import themeDark from './config/themes/Dark';
import GlobalStyles from './config/styles/GlobalStyles';

export default function App() {
    const theme = 1 + 1 === 2 ? themeDark : themeDefault;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles fontFamily='Arial' />
            <Routers/>
        </ThemeProvider>
    );
};