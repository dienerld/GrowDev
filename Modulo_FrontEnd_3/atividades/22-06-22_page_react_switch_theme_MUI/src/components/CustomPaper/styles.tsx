import { Paper, styled, SxProps } from '@mui/material';
import React from 'react';

type propsPaper = {
  height?: string;
  width?: string;
  img?: string;
  sx?: SxProps;
}

export const PaperStyled = styled(Paper)((props: propsPaper) => ({

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: props.height || '100%',
  width: props.width || '100%',
  justifyContent: 'center',
  background: `url(${props.img}) no-repeat center`,
  ...props.sx as React.CSSProperties,
}));
