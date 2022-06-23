import React from 'react';
import { PaperStyled } from './styles';

type CustomPaperProps = {
    children?: React.ReactNode;
    img?: string;
    height?: string
    width?: string
};

export function CustomPaper({ children, img, height, width }:CustomPaperProps) {
  return (
    <PaperStyled img={ img } height={height} width={width} color='text.primary'>
      { children }
    </PaperStyled>
  );
}
