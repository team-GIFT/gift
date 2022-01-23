import React, { useCallback, createRef } from 'react';
import { A11yHidden } from '@/components';
import { GlobalNavItemProps, GlobalNavProps } from './GlobalNav.types';
import classNames from 'classnames';

import {
  StyledNav,
  StyledGlobalNav,
  StyledGlobalNavItems,
  StyledLink,
  StyledButton,
} from './GlobalNav.styled';
import { SubMenu } from '@/components';

// TODO:
/**
 * - Function
 * - [x] more-button에 호버시 SubMenu display: block;
 * - [x] more-button에 마우스가 떠날 때 SubMenu display: none;
 * - [ ] more-button 클릭시 SubMenu display:block
 * - [ ] more-button을 다시 클릭하거나 SubMenu 외부를 클릭할 때 display:none;
 * - [ ] onMouseEnter와 onMouseLeace 이벤트보다 우선되도록 설정
 * - Style
 * - [ ] 호버시 스르르 나타나도록 애니메이션 주기
 * - [ ] 높이 지정 고민하기
 */

export function GlobalNav({
  activeClassName = 'isActive',
  className,
}: GlobalNavProps) {
  const listItems: GlobalNavItemProps[] = [
    { id: 'reactions', href: '/reactions', text: 'Reactions' },
    { id: 'entertainment', href: '/entertainment', text: 'Entertainment' },
    { id: 'sports', href: '/sports', text: 'Sports' },
    { id: 'stickers', href: '/stickers', text: 'Stickers' },
    { id: 'artists', href: '/artists', text: 'Artists' },
    { id: 'more', href: '', text: '...' },
  ];

  const subMenuRef = createRef<HTMLDivElement>();

  const active = useCallback(() => {
    subMenuRef.current?.classList.add(activeClassName);
  }, [activeClassName, subMenuRef]);

  const deactive = useCallback(() => {
    subMenuRef.current?.classList.remove(activeClassName);
  }, [activeClassName, subMenuRef]);

  return (
    <StyledNav aria-labelledby="mainmenulabel">
      <A11yHidden as="h2">Main menu</A11yHidden>
      <StyledGlobalNav>
        {listItems.map(({ id, href, text }: GlobalNavItemProps) => (
          <StyledGlobalNavItems key={id}>
            {id === 'more' ? (
              <>
                <StyledButton
                  onMouseEnter={active}
                  onMouseLeave={deactive}
                  className={classNames('more-button', className)}
                >
                  <span>{text}</span>
                </StyledButton>
                <SubMenu className={className} subMenuRef={subMenuRef} />
              </>
            ) : (
              <StyledLink href={href}>
                <span>{text}</span>
              </StyledLink>
            )}
          </StyledGlobalNavItems>
        ))}
      </StyledGlobalNav>
    </StyledNav>
  );
}
