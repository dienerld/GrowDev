import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPaper } from '../../components/StyledPaper';
import { decrease, increase, reset } from '../../store/modules/counter/counterSlice';

export function Home() {
  const counter: number = useSelector((state: any) => state.counter);
  const step = 10;

  const dispatch = useDispatch();

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const onIncrease = () => dispatch(increase(step));

  const onDecrease = () => dispatch(decrease(step));

  const onReset = () => dispatch(reset());

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

          <Box sx={{
            display: 'flex',
            gap: '1rem',
          }}
          >

            <Button onClick={onDecrease} variant="contained" color="primary">-{step}</Button>
            <Typography variant="h5" alignSelf="center">{ counter }</Typography>
            <Button onClick={onIncrease} variant="contained" color="primary">+{step}</Button>
          </Box>

          <Box>
            <Button onClick={onReset} variant="contained" color="primary">reset</Button>

          </Box>

        </StyledPaper>
      </Grid>
    </Grid>
  );
}
