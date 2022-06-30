/* eslint-disable max-len */
import { Box, Grid, Typography } from '@mui/material';
import { Slide } from '../../components/Slide';

export function Four() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const links = ['https://developerplus.com.br/hook-usecallback-no-react-native/', ' https://kinsta.com/pt/blog/usecallback-react/', 'https://medium.com/@devjpnobrega/primeiros-passos-com-react-hooks-usememo-e-usecallback-13d54da4f9ba'];
  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Slide sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Vantagens do Hook useCallback
          </Typography>

          <Typography variant="body1">
            Melhora o desempenho do aplicativo, evitando renderizações e processamentos desnecessários.
          </Typography>

          <Typography variant="h3" alignSelf="center">
            Desvantagens do Hook useCallback
          </Typography>

          <Typography variant="body1">
            <strong> Garbage collection:</strong> As funções que ainda não estão memorizadas serão jogadas fora pelo React para liberar espaço na memória.
          </Typography>

          <Typography variant="body1">
            <strong> Alocação de memória:</strong> Quanto mais funções memorizadas você tiver em seu código mais memória será necessária. Para cada vez que você chamar essas funções um monte de códigos dentro do React precisará entrar em ação usando mais memória para fornecer a saída de cachê.
          </Typography>

          <Typography variant="body1">
            <strong>Complexidade do código:</strong> Quando os Hooks são envolvidos imediatamente é elevado a complexidade do código.
          </Typography>

          <Box sx={{
            ...alignCenter,
            marginTop: '3rem',
            gap: '1rem',
            position: 'relative',
            bottom: '0',
            alignItems: 'flex-start',
          }}
          >
            <Typography variant="body1">
              Fontes:
            </Typography>
            {
              links.map((link) => (
                <Typography
                  variant="body1"
                  key={link}
                  color="#047cfc"
                  component="a"
                  href={link}
                  target="_blank"
                >
                  {link}
                </Typography>
              ))
}

          </Box>
        </Slide>

      </Grid>

    </Grid>
  );
}
