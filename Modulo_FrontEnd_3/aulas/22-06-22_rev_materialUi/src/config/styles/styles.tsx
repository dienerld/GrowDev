import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export function StylesGlobal() {
  const theme = useTheme();

  return (
    <GlobalStyles styles={{
      width: '100vw',
      backgroundColor: theme.palette.background.default,
      a: {
        textDecoration: 'none',
        color: '#c3c3c3'
      }
    }}/>
  );
}
