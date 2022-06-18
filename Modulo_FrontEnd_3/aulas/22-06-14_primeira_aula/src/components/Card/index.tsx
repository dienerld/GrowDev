import React from 'react';

type TCardProps = {
  title: string;
  text?: string;
  list?: string[];
  children?: React.ReactNode;
};

export function Card({
  title,
  text = 'adasdasdasdas',
  list,
  children,
}: TCardProps) {
  return (
    <div>
      <h2>Hello {title}</h2>
      <p>{text}</p>

      <ul>
        {list?.map((item, key) => (
          <li key={`${key}_${item}`}>{item}</li>
        ))}
      </ul>

      {children}
    </div>
  );
}
