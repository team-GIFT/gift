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
import { useParams, Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

export function Header() {
  const { keyword } = useParams();
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 1070);

  useEffect(() => {
    if ((width >= 1070 && isMobile) || (width < 1070 && !isMobile))
      setIsMobile(width < 1070);
  }, [isMobile, width]);

  // Header 상단 재랜더링 방지를 위해 메모
  const styledMenuWrap = useMemo(
    () => (
      <StyledMenuWrap>
        <StyledLogoWrap>
          <Link to="/">
            <Logo title="GIFT" />
          </Link>
        </StyledLogoWrap>

        {isMobile ? (
          <>
            <Link to="/" aria-label="create GIF">
              <SvgIcon id="plus" height={39} width={39} />
            </Link>
            <Link to="/" aria-label="user">
              <SvgIcon
                id="user"
                height={39}
                width={39}
                fill={theme.darkMode.color.gray05}
              />
            </Link>
            <GlobalNav isMobile={true} />
          </>
        ) : (
          <>
            <GlobalNav />

            <StyledLinkWrap>
              <StyledLink to="/">Upload</StyledLink>
              <StyledLink to="/">Create</StyledLink>
            </StyledLinkWrap>
            <StyledUserWrap>
              {/* login */}
              <SvgIcon
                id="user"
                fill={theme.darkMode.color.gray05}
                height={35}
                width={35}
              />
              <Link to="/">Log in</Link>
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
