import {
  Paper, styled, SxProps, Theme,
} from '@mui/material';
import React from 'react';

type StyledPaperProps = {
  sx?: SxProps<Theme>;
  height?: string;
};
type SlideProps = {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};

const StyledPaper = styled(Paper)(({ sx, height }: StyledPaperProps) => ({
  width: '80%',
  height: height || '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '1rem',
  ...(sx as React.CSSProperties),
}));

export function Slide({ children, sx }: SlideProps) {
  return <StyledPaper sx={sx}>{children}</StyledPaper>;
}
