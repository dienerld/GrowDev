import { Grid, Typography } from '@mui/material';
import { CustomPaper } from '../../components/CustomPaper';

export function Home() {
  return (
    <Grid container>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <Typography variant='h1' color='text.primary' >Título</Typography>
        </Grid>
        <Grid item xs={4}>
          <CustomPaper>
            <Typography variant='body2' color='text.primary' >Título</Typography>
          </CustomPaper>
        </Grid>
        <Grid item xs={4}>
          <CustomPaper>
            <Typography variant='body2' color='text.primary' >Título</Typography>
          </CustomPaper>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h2' color='text.primary'>Título 2</Typography>
      </Grid>
    </Grid>
  );
}
