import React from 'react';
import { A11yHidden } from '@/components';
import { listItemProps } from './GlobalNav.types';

export function GlobalNav() {
  const listItems: listItemProps[] = [
    'Reactions',
    'Entertainment',
    'Sports',
    'Stickers',
    'Artists',
    'More',
  ];

  return (
    <nav aria-labelledby="mainmenulabel">
      <A11yHidden as="h2">Main menu</A11yHidden>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </nav>
  );
}
