import React from 'react';
import { Grid } from '@mui/material';
import Menu from '../../components/Menu';

export function Home() {
  const links = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
  ];

  return (
    <Grid container>
      <Grid item container xs={6}>
        <Menu items={links} />
      </Grid>
    </Grid>
  );
}
