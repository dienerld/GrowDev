import React from 'react';

import { CustomPaper } from '../CustomPaper';

type sectionProps = {
  children?: React.ReactNode;
  height?: string;
  width?: string;
  img?: string;
}

export function Section({ children, height, width, img }: sectionProps) {
  return (
    <CustomPaper img={img} height={height} width={width}>
      {children}
    </CustomPaper>
  );
}
