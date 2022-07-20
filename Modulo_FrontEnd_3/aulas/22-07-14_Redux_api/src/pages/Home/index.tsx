/* eslint-disable max-len */
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import { StyledPaper } from '../../components/StyledPaper';
import { getPokemon } from '../../services/api';

export function Home() {
  const [keyPokemon, setKeyPokemon] = useState('');
  const [dataPokemon, setDataPokemon] = useState({});

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleGetPokemon = async (value: string) => {
    const data = await getPokemon(value);

    setDataPokemon(data);
  };

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <StyledPaper sx={{
          gap: '1rem',
          alignItems: 'center',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Pokedex
          </Typography>

          <TextField onChange={(e) => setKeyPokemon(e.target.value)} value={keyPokemon} />
          {dataPokemon && (
            <Typography variant="h4" alignSelf="center">
              {dataPokemon.name}
            </Typography>
          )}
          <Button variant="contained" onClick={() => handleGetPokemon(keyPokemon)}>Buscar</Button>
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
