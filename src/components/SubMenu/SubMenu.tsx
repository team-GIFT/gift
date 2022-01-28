import React, { useMemo } from 'react';
import { A11yHidden } from '@/components';
import {
  StyledSubMenuWrapper,
  StyledTopSection,
  StyledBottomSection,
  StyledTopSectionListItemUl,
  StyledCopyright,
  StyledBottomSectionList,
} from './SubMenu.styled';
import { LinkProps, SubMenuProps } from './SubMenu.types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export function SubMenu({ className, isMobile }: SubMenuProps) {
  const subMenuTopLinks: LinkProps[] = useMemo(
    () => [
      {
        id: 'categories',
        href: '/search/categories',
        text: 'Categories',
        children: [
          {
            id: 'giphy-studios',
            href: '/search/giphy-studios',
            text: 'GIPHY Studios',
          },
          { id: 'animals', href: '/search/animals', text: 'Animals' },
          { id: 'action', href: '/search/action', text: 'Actions' },
          { id: 'anime', href: '/search/anime', text: 'Anime' },
          { id: 'cartoons', href: '/search/cartoons', text: 'Cartoons' },
          { id: 'emoticons', href: '/search/emoticons', text: 'Emoticons' },
          {
            id: 'food-drinks',
            href: '/search/food-drinks',
            text: 'Food/Drink',
          },
          { id: 'gaming', href: '/search/gaming', text: 'Gaming' },
          {
            id: 'holidays-greetings',
            href: '/search/holidays-greetings',
            text: 'Holidays/Greetings',
          },
          { id: 'memes', href: '/search/memes', text: 'Memes' },
          { id: 'clips', href: '/search/clips', text: 'Clips' },
        ],
      },
      {
        id: 'stickers',
        href: '/search/stickers',
        text: 'Stickers',
        children: [
          { id: 'originals', href: '/search/originals', text: 'Originals' },
          { id: 'trending', href: '/search/trending', text: 'Trending' },
          { id: 'reaction', href: '/search/reaction', text: 'Reaction' },
          { id: 'packs', href: '/search/packs', text: 'Packs' },
        ],
      },
      {
        id: 'apps',
        href: '/search/apps',
        text: 'Apps',
        children: [
          { id: 'giphy', href: '/search/giphy', text: 'GIPHY' },
          {
            id: 'giphy-world',
            href: '/search/giphy-world',
            text: 'GIPHY World',
          },
          {
            id: 'giphy-capture',
            href: '/search/giphy-capture',
            text: 'GIPHY Capture',
          },
        ],
      },
      {
        id: 'about',
        href: '/search/about',
        text: 'About',
        children: [
          { id: 'team', href: '/search/team', text: 'Team' },
          {
            id: 'engineering-blog',
            href: '/search/engineering-blog',
            text: 'Engineering Blog',
          },
          {
            id: 'giphy-arts',
            href: '/search/giphy-arts',
            text: 'GIPHY Arts',
          },
          {
            id: 'studios',
            href: '/search/studios',
            text: 'Studios',
          },
          {
            id: 'developers',
            href: '/search/developers',
            text: 'Developers',
          },
          {
            id: 'labs',
            href: '/search/labs',
            text: 'Labs',
          },
          {
            id: 'FAQ',
            href: '/search/FAQ',
            text: 'FAQ',
          },
          {
            id: 'support',
            href: '/search/support',
            text: 'Support',
          },
          {
            id: 'jobs',
            href: '/search/jobs',
            text: 'Jobs',
          },
          {
            id: 'DMCA',
            href: '/search/DMCA',
            text: 'DMCA',
          },
          {
            id: 'guidelines',
            href: '/search/guidelines',
            text: 'Guidelines',
          },
        ],
      },
    ],
    []
  );
  const subMenuBottomLinks: LinkProps[] = useMemo(
    () => [
      {
        id: 'terms-of-service',
        href: '/search/terms-of-service',
        text: 'Terms of Service',
      },
      {
        id: 'community-guidelines',
        href: '/search/community-guidelines',
        text: 'Community guidelines',
      },
      {
        id: 'privacy-policy',
        href: '/search/privacy-policy',
        text: 'Privacy Policy',
      },
      {
        id: 'copyright',
        href: '/search/copyright',
        text: 'Copyright',
      },
      {
        id: 'manage-cookies',
        href: '/search/manage-cookies',
        text: 'Manage cookies',
      },
    ],
    []
  );

  return (
    <StyledSubMenuWrapper className={classNames('sub-menu', className)}>
      <A11yHidden as="h2">Sub Menu</A11yHidden>
      <StyledTopSection>
        {subMenuTopLinks.map(({ id, href, text, children }) => (
          <li key={id}>
            <a href={href}>{text}</a>
            {children && (
              <StyledTopSectionListItemUl
                $columns={isMobile ? 2 : children.length > 6 ? 2 : ''}
              >
                {children.map(({ id, href, text }) => (
                  <li key={id}>
                    <Link to={href}>{text}</Link>
                  </li>
                ))}
              </StyledTopSectionListItemUl>
            )}
          </li>
        ))}
      </StyledTopSection>
      <StyledBottomSection>
        <StyledCopyright>© 2022 GIPHY, Inc.</StyledCopyright>
        <StyledBottomSectionList>
          {subMenuBottomLinks.map(({ id, href, text }) => (
            <li key={id}>
              <Link to={href}>{text}</Link>
            </li>
          ))}
        </StyledBottomSectionList>
      </StyledBottomSection>
    </StyledSubMenuWrapper>
  );
}
