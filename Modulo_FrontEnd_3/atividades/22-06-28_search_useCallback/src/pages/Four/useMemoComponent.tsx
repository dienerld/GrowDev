import {
  Button, Box, Grid, Typography,
} from '@mui/material';
import {
  useMemo, useCallback, useState, useEffect,
} from 'react';

export function UseMemoComponent() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [list, setList] = useState<number[]>([]);
  const [value, setValue] = useState(0);
  const [callback, setCallback] = useState(0);
  const [trigger, setTrigger] = useState(true);

  //  guarda o resultado do processamento da função
  const callbackMemoized = useMemo(
    useCallback(() => value, [callback]),
    [callback],
  );

  // força o reprocessamento da callback
  useEffect(() => {
    console.log('act setCallback');
    setCallback(callback + 1);
  }, [value]);

  // add um novo item na lista
  useEffect(() => {
    console.log('act setList');
    const copyList = list;
    copyList.push(callbackMemoized);
    setList(copyList);
  }, [trigger]);

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
            onClick={() => setTrigger(!trigger)}
          >
            Trigger
          </Button>

          {list.map((item, key) => (
            <Typography key={`${key}-1`}>
              {item}
            </Typography>
          ))}
        </Box>

      </Grid>
    </Grid>
  );
}
