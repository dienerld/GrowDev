import React from 'react';
import { ContainerSection } from './styles';

type sectionProps = {
  title: string;
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

export function Section({ title, children, height, width }: sectionProps) {
  return (
    <ContainerSection height={height} width={width}>
      <h2>{title}</h2>

      {children}
    </ContainerSection>
  );
}
