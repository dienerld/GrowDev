/* eslint-disable max-len */
import { CardMedia, Grid, Typography } from '@mui/material';
import { Slide } from '../../components/Slide';
import img from '/assets/images/schema_memoized.png';

export function Tree() {
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
            Exemplo
          </Typography>

          <Typography variant="body1">
            Mas imagine um componente pai que tem 500 componentes filhos, e ao alterar somente o componente pai, o React tenha que refazer todas as funções de todos os componentes filhos que não sofreram alterações?? Traduzindo pra prática: temos um comentário principal que possui 500 respostas, também em forma de comentários.
          </Typography>

          <Typography variant="body1">
            Então o usuário edita seu comentário principal e o seu aplicativo tenha que refazer as funções novamente em todas as respostas, sem necessidade. Com o useCallback evitamos essa repetição desnecessária.
          </Typography>

          <CardMedia
            component="img"
            image={img}
            sx={{
              backgroundColor: '#ccc',
            }}
          />

        </Slide>
      </Grid>
    </Grid>
  );
}
