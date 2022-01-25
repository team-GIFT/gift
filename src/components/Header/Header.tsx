import { theme } from '@/styles';
import React, { useEffect, useState } from 'react';
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
  // const { width } = useWindowDimensions();
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 1070);

  useEffect(() => {
    if ((width >= 1070 && isMobile) || (width < 1070 && !isMobile))
      setIsMobile(width < 1070);
  }, [isMobile, width]);

  return (
    <StyledHeader>
      <StyledMenuWrap>
        <StyledLogoWrap>
          <a href="/">
            <Logo title="GIFT" />
          </a>
        </StyledLogoWrap>

        {isMobile ? (
          <>hello</>
        ) : (
          <>
            <GlobalNav activeClassName="isActive" />

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

      <SearchBar value={keyword ? keyword : ''} />
    </StyledHeader>
  );
}
