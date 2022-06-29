import { Grid } from '@mui/material';
import { Slide } from '../../components/Slide';

export function Home() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" height="800px" sx={alignCenter}>
        <Slide />
      </Grid>
    </Grid>
  );
}
