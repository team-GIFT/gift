import { theme } from '@/styles';
import React from 'react';
import { GlobalNav, Logo, SearchBar, SvgIcon } from '..';
import {
  StyledHeader,
  StyledMenuWrap,
  StyledLogoWrap,
  StyledLinkWrap,
  StyledLink,
  StyledUserWrap,
} from './Header.styled';

export function Header() {
  return (
    <StyledHeader>
      <StyledMenuWrap>
        <StyledLogoWrap>
          <a href="/">
            <Logo title="GIFT" />
          </a>
        </StyledLogoWrap>

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
      </StyledMenuWrap>

      <SearchBar />
    </StyledHeader>
  );
}
