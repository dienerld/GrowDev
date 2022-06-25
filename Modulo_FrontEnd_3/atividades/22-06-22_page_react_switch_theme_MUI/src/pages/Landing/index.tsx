import { DesktopWindowsRounded } from '@mui/icons-material';
import { Grid, Typography, useTheme } from '@mui/material';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';

export function Landing() {
  const theme = useTheme();

  return (
    <Grid container>
      <Section img="assets/ocean.jpg" height="200px">
        <Typography variant="h3">
          Landing
        </Typography>
      </Section>

      <Section>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
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
          }}
        >
          <Grid item sm={12} md={4} display="flex" alignItems="center" justifyContent="center">

            <Card sx={{
              width: '60%',
              '@media (min-width: 900px)': {
                width: '80%',
              },
            }}
            >
              <DesktopWindowsRounded />
              <Typography variant="h4">
                Desktop
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Card>
          </Grid>

          <Grid item sm={12} md={4} display="flex" alignItems="center" justifyContent="center">

            <Card sx={{
              width: '60%',
              '@media (min-width: 900px)': {
                width: '80%',
              },

            }}
            >
              <DesktopWindowsRounded />
              <Typography variant="h4">
                Desktop
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            sx={
            {
              backgroundColor: 'palette.background',
            }
          }
          >

            <Card sx={{
              width: '60%',
              '@media (min-width: 900px)': {
                width: '80%',
              },
            }}
            >
              <DesktopWindowsRounded />
              <Typography variant="h4">
                Desktop
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Card>
          </Grid>

        </Grid>

      </Section>
    </Grid>
  );
}
