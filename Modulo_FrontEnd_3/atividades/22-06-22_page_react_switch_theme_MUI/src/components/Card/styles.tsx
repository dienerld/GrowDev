import { Paper } from '@mui/material';
import styled from '@emotion/styled';

export const CardStyled = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  // width: '30%',
  minWidth: '200px',
  minHeight: '200px',
  gap: '1rem',
  background: 'background.paper',

  '@media (max-width: 600px)': {
    width: '100%',
    minWidth: '100%',
    height: 'auto',
    marginBottom: '8px',
  },

  '@media (max-width: 900px)': {
    flexDirection: 'column',
    gap: '1rem',
    width: '80%',
  },
});
