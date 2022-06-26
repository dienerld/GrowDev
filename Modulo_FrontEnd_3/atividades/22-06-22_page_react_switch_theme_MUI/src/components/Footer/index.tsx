import { AppBar, Container, Typography } from '@mui/material';

export function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        bottom: 0,
      }}
    >
      <Container>
        <Typography variant="h6">fsdf</Typography>
      </Container>
    </AppBar>
  );
}
