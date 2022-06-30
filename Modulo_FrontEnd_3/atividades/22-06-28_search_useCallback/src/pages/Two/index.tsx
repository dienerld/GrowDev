/* eslint-disable max-len */
import { CardMedia, Grid, Typography } from '@mui/material';

import { Slide } from '../../components/Slide';
import img from '/assets/images/demo.png';

export function Two() {
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
          <Typography variant="h4" alignSelf="center">
            O que é memoization?
          </Typography>

          <Typography variant="body1">
            Uma função memo armazena os resultados finais correspondentes (valores) para um dado conjunto específico de entrada. As próximas chamadas com as respectivas entradas já armazenadas irão retornar o resultado guardado ao invés de recalculá-los.
            Desta forma, quando usamos o useCallback, ele entrega uma função memorizada, um Callback memorizado é baseado em um array de argumentos, como o exibido a seguir:
          </Typography>

          <CardMedia
            component="img"
            image={img}
            sx={{
              alignSelf: 'center',
              maxWidth: '960px',
            }}
          />

          <Typography variant="body1">
            Assim, o Callback será recalculado quando os argumentos a e b forem alterados.
          </Typography>

          <Typography variant="body1">
            Como a documentação do React mesmo diz: <em>“useCallback =&gt; retorna uma função de Callback memorizada enquanto que useMemo =&gt; retorna  valores memorizados”</em>
          </Typography>
          <Typography variant="body1">
            A diferença é que useMemo será executado junto com a renderização, enquanto useCallback vai memorizar o Callback e aguardar ser executado.
          </Typography>

          {/*  */}
        </Slide>
      </Grid>
    </Grid>
  );
}
