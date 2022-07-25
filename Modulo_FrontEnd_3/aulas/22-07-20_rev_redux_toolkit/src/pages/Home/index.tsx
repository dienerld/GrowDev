/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
import { StyledPaper } from '../../components/StyledPaper';

export function Home() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <StyledPaper sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Template React + Material UI
          </Typography>

          <Typography variant="body1">
            Template para desenvolvimento de aplicações React utilizando o Material UI.
          </Typography>

        </StyledPaper>
      </Grid>
    </Grid>
  );
}
