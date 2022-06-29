import React from 'react';

import { Typography } from '@mui/material';

import logo from '../../assets/code-unsplash.jpg';

type TMenuItem = {
  title: string;
  link: string;
};

type TPropsMenu = {
  items?: TMenuItem[];
  children?: React.ReactNode;
};

export default function Menu({ items, children }: TPropsMenu) {
  return (
    <>
      <Typography variant="h2" color="text.primary">
        Menu
      </Typography>
      <nav>
        <ul>
          {items?.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {children}

        <img src={logo} alt="picsum" />
      </nav>
    </>
  );
}
