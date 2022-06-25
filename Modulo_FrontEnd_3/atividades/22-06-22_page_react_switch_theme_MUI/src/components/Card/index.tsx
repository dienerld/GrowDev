import { SxProps, Theme } from '@mui/material';
import React from 'react';
import { CardStyled } from './styles';

type cardProps = {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function Card({ children, sx }: cardProps) {
  return (
    <CardStyled elevation={1} sx={sx}>
      {children}
    </CardStyled>
  );
}
