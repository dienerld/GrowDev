/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
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
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Slide sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Características do Hook useCallback
          </Typography>

          <Typography variant="body1">
            Características do Hook useCallback
            Os Hooks apareceram como uma novidade para usar os recursos de classe, como estado e ciclo de vida, em componentes funcionais.
          </Typography>

          <Typography variant="body1">
            O useCallback é um Hook adicional, mas há um motivo para ele existir.
          </Typography>

          <Typography variant="body1">
            No React, cada vez que um componente é renderizado, todas as funções dentro dele são criadas novamente, suas referências são alteradas e o conjunto de instruções em seu escopo é executado. Esse Hook é utilizado para melhorar o desempenho do aplicativo, evitando renderizações e processamentos desnecessários.
          </Typography>

          <Typography variant="body1">
            Para otimizar a renderização o React conta com um conceito muito usado no desenvolvimento de software a memorização (Memoization).
          </Typography>

        </Slide>
      </Grid>
    </Grid>
  );
}
