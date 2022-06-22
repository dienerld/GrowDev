import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export const LinkForm = styled(Link)({
  fontSize: '12px',
});

// eslint-disable-next-line no-shadow
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
