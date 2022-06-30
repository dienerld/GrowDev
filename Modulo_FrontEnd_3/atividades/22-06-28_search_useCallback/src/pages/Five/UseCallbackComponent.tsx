import {
  Button, Box, Grid, Typography,
} from '@mui/material';
import {
  useCallback, useState, useEffect,
} from 'react';

export function UseCallbackComponent() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [list, setList] = useState<number[]>([]);
  const [value, setValue] = useState(0);
  const [callback, setCallback] = useState(0);
  const [show, setShow] = useState(true);

  //  guarda o resultado do processamento da função
  const callbackMemoized = useCallback(() => value, [callback]);

  // add um novo item na lista
  useEffect(() => {
    const copyList = list;
    copyList.push(callbackMemoized());
    setList(copyList);
  }, [show]);

  return (
    <Grid container sx={alignCenter}>
      <Grid
        item
        width="100%"
        paddingTop="2rem"
        sx={{ ...alignCenter, gap: '1rem' }}
      >

        <Box
          sx={{
            ...alignCenter,
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginRight: '1rem',
            }}
          >
            {value}
          </Typography>
          <Button variant="contained" onClick={() => setValue(value + 1)}>
            Incremento
          </Button>

          <Button
            variant="contained"
            sx={{
              marginX: '8px',
            }}
            onClick={() => setCallback(callback + 1)}
          >
            update Callback
          </Button>

          <Button
            variant="contained"
            sx={{
              marginX: '8px',
            }}
            onClick={() => setShow(!show)}
          >
            update list
          </Button>

          {list.map((item) => (
            <Typography>
              {item}
            </Typography>
          ))}
        </Box>

      </Grid>
    </Grid>
  );
}
