import { HomeRounded } from '@mui/icons-material';
import { Grid, Typography, useTheme, Theme, TextField, Box, Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';
import { useState } from 'react';
import { Item, LinkForm } from './styles';

export function Login() {
  const theme: Theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setLogin = () => {
    alert(`Login ${email} e ${password}`);
  };

  return (
    <Grid container justifyContent="center" pt={2} sx={{
      backgroundColor: theme.palette.background.default,
      height: '100%',
    }}>
      <Grid item xs={10} sm={8} md={6} xl={4} justifyContent="center">
        <Item>
          <HomeRounded sx={{
            fontSize: '56px',
          }}/>

          <Typography variant="h3">
            Sign in
          </Typography>

          <Box component="form" sx={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>

            <Box sx={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <TextField
                id="outlined"
                label="Email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              ></TextField>

              <TextField
                id="outlined"
                type="password"
                label="Senha"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
              ></TextField>

              <FormGroup sx={{
                [theme.breakpoints.down('sm')]: {
                  span: {
                    fontSize: '0.875rem',
                  }
                }
              }}>
                <FormControlLabel control={<Checkbox/>} label="Mantenha-me Conectado" />
              </FormGroup>

              <Button variant="contained" onClick={setLogin}>Entrar</Button>

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <LinkForm to="" color='text.primary'>
                  Esqueceu a senha?
                </LinkForm>

                <LinkForm to="" color='text.primary'>
                  Criar conta
                </LinkForm>
              </Box>
            </Box>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}
