import { SxProps } from '@mui/material';
import React from 'react';
import { PaperStyled } from './styles';

type CustomPaperProps = {
    children?: React.ReactNode;
    img?: string;
    height?: string;
    width?: string;
    sx?: SxProps
};

export function CustomPaper({
  children, img, height, width, sx,
}:CustomPaperProps) {
  return (
    <PaperStyled img={img} height={height} width={width} color="text.primary" sx={sx}>
      { children }
    </PaperStyled>
  );
}
