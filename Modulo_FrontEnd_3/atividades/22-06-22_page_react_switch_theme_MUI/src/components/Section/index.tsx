import { SxProps } from '@mui/material';
import React from 'react';

import { CustomPaper } from '../CustomPaper';

type sectionProps = {
  children?: React.ReactNode;
  height?: string;
  width?: string;
  img?: string;
  sx?: SxProps
}

export function Section({ children, height, width, img, sx }: sectionProps) {
  return (
    <CustomPaper img={img} height={height} width={width} sx={sx}>
      {children}
    </CustomPaper>
  );
}
