import { FacebookRounded, Google, Instagram } from '@mui/icons-material';
import { AppBar, Grid, List, SxProps, Theme, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledLi } from './styles';

type propsFooter = {
  height?: string
  sx?: SxProps<Theme>
}

export function Footer({ height, sx }: propsFooter) {
  return (
    <AppBar
      position="static"
      sx={{
        bottom: 0,
        color: 'text.primary',
        borderRadius: '0',
        height: height || '3rem',
        ...sx,
      }}
    >
      <Grid
        container
        height="100%"
        alignItems="center"
        sx={{
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          },
          flexWrap: 'nowrap',
        }}
      >
        <Grid
          item
          xs={10}
          md={9}
          display="flex"
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',

            '@media (max-width: 600px)': {
              alignItems: 'center',
              marginBottom: '0',
            },
          }}
        >
          <List sx={{ display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              fontSize: '.8rem',
              flexDirection: 'row',
              flexWrap: 'wrap',
            } }}
          >
            <StyledLi>
              <Link to="/about">About</Link>
            </StyledLi>

            <StyledLi isDot>
              .
            </StyledLi>

            <StyledLi>
              <Link to="/contact">Contact</Link>
            </StyledLi>

            <StyledLi isDot>
              .
            </StyledLi>

            <StyledLi>
              <Link to="/terms">Terms of Use</Link>
            </StyledLi>

            <StyledLi isDot>
              .
            </StyledLi>

            <StyledLi>
              <Link to="/privacy">Privacy Policy</Link>
            </StyledLi>
          </List>

          <Typography
            variant="subtitle1"
            sx={{
              marginLeft: '1rem',

              '@media (max-width: 600px)': {
                marginLeft: '0',
                marginTop: '-0.5rem',
              },
            }}
          >
            Desenvolvido por
            <a
              href="https://github.com/dienerld"
              target="_blank"
              rel="noreferrer"
            > Diener
            </a>
          </Typography>
        </Grid>

        <Grid
          item
          xs={2}
          md={2}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '1rem',
            height: '74px',
            alignSelf: 'flex-start',
            gap: '0.5rem',

            '@media (max-width: 600px)': {
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem',
              height: '100%',
              marginRight: '0',
            },
          }}
        >
          <FacebookRounded />
          <Instagram />
          <Google />
        </Grid>

      </Grid>
    </AppBar>
  );
}
