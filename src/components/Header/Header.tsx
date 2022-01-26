import { theme } from '@/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { GlobalNav, Logo, SearchBar, SvgIcon } from '@/components';
import {
  StyledHeader,
  StyledMenuWrap,
  StyledLogoWrap,
  StyledLinkWrap,
  StyledLink,
  StyledUserWrap,
} from './Header.styled';
import { useParams } from 'react-router-dom';
import { useWindowSize } from 'react-use';

export function Header() {
  const { keyword } = useParams();
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 1070);

  useEffect(() => {
    if ((width >= 1070 && isMobile) || (width < 1070 && !isMobile))
      setIsMobile(width < 1070);
  }, [isMobile, width]);

  // Header 상당 재랜더링 방지를 위해 메모
  const styledMenuWrap = useMemo(
    () => (
      <StyledMenuWrap>
        <StyledLogoWrap>
          <a href="/">
            <Logo title="GIFT" />
          </a>
        </StyledLogoWrap>

        {isMobile ? (
          <>
            <a href="/">
              <SvgIcon id="plus" height={39} width={39} />
            </a>
            <a href="/">
              <SvgIcon
                id="user"
                height={39}
                width={39}
                fill={theme.darkMode.color.gray05}
              />
            </a>
            <GlobalNav activeClassName="isActive" isMobile={true} />
          </>
        ) : (
          <>
            <GlobalNav />

            <StyledLinkWrap>
              <StyledLink href="#">Upload</StyledLink>
              <StyledLink href="#">Create</StyledLink>
            </StyledLinkWrap>
            <StyledUserWrap>
              {/* login */}
              <SvgIcon
                id="user"
                fill={theme.darkMode.color.gray05}
                height={35}
                width={35}
              />
              <span>Log in</span>
            </StyledUserWrap>
          </>
        )}
      </StyledMenuWrap>
    ),
    [isMobile]
  );

  return (
    <StyledHeader>
      {styledMenuWrap}
      <SearchBar value={keyword ? keyword : ''} />
    </StyledHeader>
  );
}
