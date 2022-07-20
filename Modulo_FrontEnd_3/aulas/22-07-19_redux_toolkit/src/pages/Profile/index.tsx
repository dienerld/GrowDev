import { Box, Grid, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPaper } from '../../components/StyledPaper';
import { save } from '../../store/modules/profile/profileSlice';

type TForm = {
  name: string;
  age: number;
};

export function Profile() {
  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const profile: TForm = useSelector((state: any) => state.profile) as TForm;
  const dispatch = useDispatch();

  const handleSaveProfile = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(save({
      ...profile,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Grid
      container
      sx={{
        ...alignCenter,
        marginTop: '2rem',
      }}
    >
      <StyledPaper>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-name"
              name="name"
              label="Name"
              type="text"
              value={profile.name}
              onChange={handleSaveProfile}
            />

            <TextField
              id="outlined-age-input"
              label="age"
              name="age"
              type="number"
              value={profile.age}
              onChange={handleSaveProfile}
            />

          </div>
        </Box>

      </StyledPaper>
    </Grid>
  );
}
