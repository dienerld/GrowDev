/* eslint-disable no-plusplus */
import {
  Button, Box, Grid, Typography,
} from '@mui/material';
import {
  useMemo, useCallback, useState, useEffect,
} from 'react';
import { Slide } from '../../components/Slide';
import { SimpleSnackbar } from '../../components/SnackBar';

export function Four() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [open, setOpen] = useState(false);

  // executa a  função de forma instantânea mesmo sendo refeita sempre
  const callbackMemoized = useCallback(() => setOpen(!open), [value1, open]);

  // emula um delay no 'reprocessamento' da callback
  useEffect(() => {
    setTimeout(() => { setValue1(value1 + 1); callbackMemoized(); }, 2000);
  }, [value]);

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Slide sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Exemplo Prático
          </Typography>

          <Box sx={{
            ...alignCenter,
            flexDirection: 'row',
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
            <Button
              variant="contained"
              onClick={() => setValue(value + 1)}
            >
              Incremento
            </Button>
            <Button
              variant="contained"
              onClick={callbackMemoized}
            >
              Incremento1
            </Button>
          </Box>

          <Box sx={{
            ...alignCenter,
            flexDirection: 'row',
          }}
          >

            <SimpleSnackbar open={open} setOpen={setOpen} />

          </Box>
        </Slide>
      </Grid>

    </Grid>
  );
}
