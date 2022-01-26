import React, { useCallback, useRef, useState } from 'react';
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
import { SubMenu, SvgIcon } from '@/components';

// TODO:
/**
 * - Function
 * - [x] more-button에 호버시 SubMenu display: block;
 * - [x] more-button에 마우스가 떠날 때 SubMenu display: none;
 * - [x] more-button 클릭시 SubMenu display:block
 * - [x] more-button을 다시 클릭하거나 SubMenu 외부를 클릭할 때 display:none;
 * - [ ] 키보드로 subMenu 접근 및 탐색 가능
 * - [ ] focus 상태일 때 외부를 클릭하지 않는 한 active 유지
 * - Style
 * - [x] 호버시 스르르 나타나도록 애니메이션 주기
 * - [x] 높이 지정 고민하기
 */

export function GlobalNav({
  activeClassName = 'isActive',
  className,
  isMobile = false,
}: GlobalNavProps) {
  const listItems: GlobalNavItemProps[] = [
    { id: 'reactions', href: '/reactions', text: 'Reactions' },
    { id: 'entertainment', href: '/entertainment', text: 'Entertainment' },
    { id: 'sports', href: '/sports', text: 'Sports' },
    { id: 'stickers', href: '/stickers', text: 'Stickers' },
    { id: 'artists', href: '/artists', text: 'Artists' },
    { id: 'more', href: '', text: '...' },
  ];

  const subMenuRef = useRef<HTMLDivElement>();

  // TODO: 기기가 모바일일 때 클릭 이벤트 고려 해야 함

  const active = useCallback(() => {
    subMenuRef.current?.classList.add(activeClassName);
  }, [activeClassName, subMenuRef]);

  const deactive = useCallback(() => {
    subMenuRef.current?.classList.remove(activeClassName);
  }, [activeClassName, subMenuRef]);

  return (
    <StyledNav aria-labelledby="mainmenulabel">
      {isMobile ? (
        <>
          <button
            onMouseEnter={active}
            onMouseLeave={deactive}
            className={classNames('more-button', className)}
          >
            <SvgIcon id="list" height={35} width={35} />
          </button>
          <SubMenu
            className={classNames('isMobile', className)}
            subMenuRef={subMenuRef}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </StyledNav>
  );
}
