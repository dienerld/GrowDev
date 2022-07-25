import {
  Box, Button, Grid, Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPaper } from '../../components/StyledPaper';
import { AppDispatch } from '../../store';
import { decrease, increase, reset } from '../../store/modules/counter/counterSlice';
import { fetchUserById } from '../../store/modules/user/userSlice';

export function Home() {
  const counter: number = useSelector((state: any) => state.counter);
  const user = useSelector((state: any) => state.user);
  const step = 1;

  const dispatch = useDispatch<AppDispatch>();

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  useEffect(() => {
    dispatch(fetchUserById(counter));
  }, [counter]);

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

          <Box sx={{
            display: 'flex',
            gap: '1rem',
          }}
          >
            <Typography variant="h5" alignSelf="center">{ user.name }</Typography>
          </Box>
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
