import React from 'react';
import { ContainerCard } from './styles';

type cardProps = {
  img?: string,
  children?: React.ReactNode,
}

export function Card({ img, children }: cardProps) {
  return (
    <ContainerCard isImg={!!img}>
      {img
        ? <img src={img} alt=""/>
        : children
      }

    </ContainerCard>
  );
}
