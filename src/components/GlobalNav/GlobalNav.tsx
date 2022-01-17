import React from 'react';
import { A11yHidden } from '@/components';
import { GlobalNavItemProps } from './GlobalNav.types';
import {
  StyledGlobalNav,
  StyledGlobalNavItems,
  StyledLink,
} from './GlobalNav.styled';

export function GlobalNav() {
  const listItems: GlobalNavItemProps[] = [
    { id: 'reactions', href: '/reactions', text: 'Reactions' },
    { id: 'entertainment', href: '/entertainment', text: 'Entertainment' },
    { id: 'sports', href: '/sports', text: 'Sports' },
    { id: 'stickers', href: '/stickers', text: 'Stickers' },
    { id: 'artists', href: '/artists', text: 'Artists' },
    { id: 'more', href: '/more', text: '...' },
  ];
  return (
    <nav aria-labelledby="mainmenulabel">
      <A11yHidden as="h2">Main menu</A11yHidden>
      <StyledGlobalNav>
        {listItems.map(({ id, href, text }: GlobalNavItemProps) => (
          <StyledGlobalNavItems key={id}>
            <StyledLink href={href}>{text}</StyledLink>
          </StyledGlobalNavItems>
        ))}
      </StyledGlobalNav>
    </nav>
  );
}
