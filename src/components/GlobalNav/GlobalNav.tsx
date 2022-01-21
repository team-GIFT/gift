import React, { useRef } from 'react';
import { A11yHidden } from '@/components';
import { GlobalNavItemProps } from './GlobalNav.types';
import {
  StyledGlobalNav,
  StyledGlobalNavItems,
  StyledLink,
  StyledButton,
} from './GlobalNav.styled';

export function GlobalNav() {
  const listItems: GlobalNavItemProps[] = [
    { id: 'reactions', href: '/reactions', text: 'Reactions' },
    { id: 'entertainment', href: '/entertainment', text: 'Entertainment' },
    { id: 'sports', href: '/sports', text: 'Sports' },
    { id: 'stickers', href: '/stickers', text: 'Stickers' },
    { id: 'artists', href: '/artists', text: 'Artists' },
    { id: 'more', href: '', text: '...' },
  ];

  const previousFocusRef = useRef<HTMLElement>(null);
  const nextFocusRef = useRef<HTMLElement>(null);

  return (
    <nav aria-labelledby="mainmenulabel">
      <A11yHidden as="h2">Main menu</A11yHidden>
      <StyledGlobalNav>
        {listItems.map(({ id, href, text }: GlobalNavItemProps) => (
          <StyledGlobalNavItems key={id}>
            {id === 'more' ? (
              <StyledButton>{text}</StyledButton>
            ) : (
              <StyledLink href={href}>{text}</StyledLink>
            )}
          </StyledGlobalNavItems>
        ))}
      </StyledGlobalNav>
    </nav>
  );
}
