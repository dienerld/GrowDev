import { Paper, styled, SxProps } from '@mui/material';
import React from 'react';

type StyledPaperProps = {
  sx?: SxProps;
};

const StyledPaper = styled(Paper)(({ sx }: StyledPaperProps) => ({
  width: '80%',
  height: '400px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  ...(sx as React.CSSProperties),
}));

export function Slide() {
  return <StyledPaper>dada</StyledPaper>;
}
