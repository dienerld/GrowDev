/* eslint-disable import/extensions */
import { DataObject, DesktopWindowsRounded, Layers, TaskAlt } from '@mui/icons-material';
import { CardMedia, Container, Grid, Icon, Typography, useTheme } from '@mui/material';
import img1 from '@assets/jenga-unsplash.jpg';
import img2 from '@assets/iphone-unsplash.jpg';
import img3 from '@assets/code-unsplash.jpg';
import imgOcean from '@assets/ocean.jpg';

import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

type TContent = {
  description: string;
  img: string;
}

export function Landing() {
  const theme = useTheme();

  const arrContent:TContent[] = [
    {
      description: 'Jenga is a board game that is played by two players. The goal of the game is to stack the pieces in a way that is possible to achieve the highest possible score.',
      img: img1,
    }, {
      description: 'The game is played on a board with a grid of squares. The board is divided into a grid of 9x9 squares. The game is played by two players. The goal of the game is to stack the pieces in a way that is possible to achieve the highest possible score.',
      img: img2,
    }, {
      description: 'The game is played on a board with a grid of squares. The board is divided into a grid of 9x9 squares. The game is played by two players. The goal of the game is to stack the pieces in a way that is possible to achieve the highest possible score.',
      img: img3,
    },
  ];

  const arrCards = [
    {
      title: 'Jenga',
      description: 'adsdasd',
      icon: '',
    },
  ];

  return (
    <Container maxWidth="xl">
      <Section
        img={imgOcean}
        height="200px"
        width="100%"
        sx={{
          borderRadius: '0px 0px 4px 4px',
          color: '#fff',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Landing
        </Typography>
      </Section>

      <Section sx={{
        margin: ' 2rem 0',
        '@media (max-width: 900px)': {
          boxShadow: 'none',
        },
      }}
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          py={2}
          sx={{
            backgroundColor: 'palette.divider',
            svg: {
              fontSize: '3rem',
              color: theme.icons.primary.main,

            },
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              gap: '1rem',
            },
            '@media (max-width: 900px)': {
              flexDirection: 'column',
              gap: '1rem',
            },
          }}
        >
          <Grid item sm={12} md={4} display="flex" alignItems="center" justifyContent="center">
            <Card
              sx={{
                width: '70%',
                '@media (max-width: 900px)': {
                  width: '80%',
                },
              }}
            >
              <DesktopWindowsRounded />
              <Typography variant="h5">
                Responsivo
              </Typography>
              <Typography variant="body1">
                Aprendendo a utilizar Framework
              </Typography>
            </Card>
          </Grid>

          <Grid item sm={12} md={4} display="flex" alignItems="center" justifyContent="center">
            <Card
              sx={{
                '@media (max-width: 900px)': {
                  width: '80%',
                },
                width: '70%',
              }}
            >
              <Layers />
              <Typography variant="h5">
                Criado com components
              </Typography>
              <Typography variant="body1">
                Utilizado materialUi
              </Typography>
            </Card>
          </Grid>

          <Grid
            item
            sm={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Card
              sx={{
                '@media (max-width: 900px)': {
                  width: '80%',
                },
                width: '70%',
                flexWrap: 'nowrap',
              }}
            >
              <TaskAlt />
              <Typography variant="h5">
                Reaproveitamento de components
              </Typography>
              <Typography variant="body1">
                Estamos no caminho
              </Typography>
            </Card>
          </Grid>

        </Grid>
      </Section>

      <Section sx={{
        minHeight: '400px',
        width: '100%',
        justifyContent: 'flex-start',
        boxShadow: 'none',

      }}
      >
        {arrContent.map((content: TContent, index) => (

          <Grid
            item
            container
            sx={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              '@media (max-width: 900px)': {
                gap: '1rem',
                marginTop: '2rem',
              },
            }}
          >
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'center',

                '@media (max-width: 900px)': {
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '100%',
                  width: '100%',
                },
              }}
            >
              <Card sx={{ width: '100%', backgroundColor: 'transparent' }}>
                <CardMedia
                  component="img"
                  src={content.img}
                  alt=""
                  width="100%"
                  sx={{
                    height: '100%',
                    objectFit: 'scale-down',
                    maxHeight: '800px',
                  }}
                />
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'center',

                '@media (max-width: 900px)': {
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '100%',
                  width: '100%',
                },
              }}
            >
              <Card sx={{ width: '100%' }}>
                <Typography variant="body1" padding="1rem">
                  {content.description}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        ))}

      </Section>

      <Section
        img={imgOcean}
        height="200px"
        sx={{
          color: '#fff',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Contato
        </Typography>
      </Section>

      <Footer height="auto" sx={{ marginTop: '0.5rem', boxShadow: '0', background: 'transparent' }} />
    </Container>
  );
}
