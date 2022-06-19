import React from 'react';
import { ContainerThumb } from './styles';

type thumbProps = {
  children: React.ReactNode;
}

export function Thumb({ children }: thumbProps) {
  return (
    <ContainerThumb>
      {children}
    </ContainerThumb>
  );
}
