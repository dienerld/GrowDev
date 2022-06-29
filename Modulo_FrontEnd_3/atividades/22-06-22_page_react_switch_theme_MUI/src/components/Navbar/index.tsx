import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Switch, useTheme } from '@mui/material';

type propsNav = {
  toggleTheme: () => void,
}

export const Navbar = ({ toggleTheme }: propsNav) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <AdbIcon sx={{ display: 'flex', mr: 1, color: theme.icons.primary.main }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Switch
              color="secondary"
              onChange={toggleTheme}
              checked={theme.palette.mode === 'dark'}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
