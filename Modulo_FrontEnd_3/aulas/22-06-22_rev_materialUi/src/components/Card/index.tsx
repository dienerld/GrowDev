import { SxProps } from '@mui/material';
import React from 'react';
import { CardStyled } from './styles';

type cardProps = {
  children?: React.ReactNode;
  sx?: SxProps;
}

export function Card({ children, sx }: cardProps) {
  return (
    <CardStyled elevation={1} sx={sx}>
      {children}
    </CardStyled>
  );
}
