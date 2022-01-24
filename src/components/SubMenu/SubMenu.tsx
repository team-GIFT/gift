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
import classNames from 'classnames';

export function SubMenu({ subMenuRef, className }: SubMenuProps) {
  const subMenuTopLinks: LinkProps[] = useMemo(
    () => [
      {
        id: 'categories',
        href: '/categories',
        text: 'Categories',
        children: [
          {
            id: 'giphy-studios',
            href: '/giphy-studios',
            text: 'GIPHY Studios',
          },
          { id: 'animals', href: '/animals', text: 'Animals' },
          { id: 'action', href: '/action', text: 'Actions' },
          { id: 'anime', href: '/anime', text: 'Anime' },
          { id: 'cartoons', href: '/cartoons', text: 'Cartoons' },
          { id: 'emoticons', href: '/emoticons', text: 'Emoticons' },
          { id: 'food-drinks', href: '/food-drinks', text: 'Food/Drink' },
          { id: 'gaming', href: '/gaming', text: 'Gaming' },
          {
            id: 'holidays-greetings',
            href: '/holidays-greetings',
            text: 'Holidays/Greetings',
          },
          { id: 'memes', href: '/memes', text: 'Memes' },
          { id: 'clips', href: '/clips', text: 'Clips' },
        ],
      },
      {
        id: 'stickers',
        href: '/stickers',
        text: 'Stickers',
        children: [
          { id: 'originals', href: '/originals', text: 'Originals' },
          { id: 'trending', href: '/trending', text: 'Trending' },
          { id: 'reaction', href: '/reaction', text: 'Reaction' },
          { id: 'packs', href: '/packs', text: 'Packs' },
        ],
      },
      {
        id: 'apps',
        href: '/apps',
        text: 'Apps',
        children: [
          { id: 'giphy', href: '/giphy', text: 'GIPHY' },
          { id: 'giphy-world', href: '/giphy-world', text: 'GIPHY World' },
          {
            id: 'giphy-capture',
            href: '/giphy-capture',
            text: 'GIPHY Capture',
          },
        ],
      },
      {
        id: 'about',
        href: '/about',
        text: 'About',
        children: [
          { id: 'team', href: '/team', text: 'Team' },
          {
            id: 'engineering-blog',
            href: '/engineering-blog',
            text: 'Engineering Blog',
          },
          {
            id: 'giphy-arts',
            href: '/giphy-arts',
            text: 'GIPHY Arts',
          },
          {
            id: 'studios',
            href: '/studios',
            text: 'Studios',
          },
          {
            id: 'developers',
            href: '/developers',
            text: 'Developers',
          },
          {
            id: 'labs',
            href: '/labs',
            text: 'Labs',
          },
          {
            id: 'FAQ',
            href: '/FAQ',
            text: 'FAQ',
          },
          {
            id: 'support',
            href: '/support',
            text: 'Support',
          },
          {
            id: 'jobs',
            href: '/jobs',
            text: 'Jobs',
          },
          {
            id: 'DMCA',
            href: '/DMCA',
            text: 'DMCA',
          },
          {
            id: 'guidelines',
            href: '/guidelines',
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
        href: '/terms-of-service',
        text: 'Terms of Service',
      },
      {
        id: 'community-guidelines',
        href: '/community-guidelines',
        text: 'Community guidelines',
      },
      {
        id: 'privacy-policy',
        href: '/privacy-policy',
        text: 'Privacy Policy',
      },
      {
        id: 'copyright',
        href: '/copyright',
        text: 'Copyright',
      },
      {
        id: 'manage-cookies',
        href: '/manage-cookies',
        text: 'Manage cookies',
      },
    ],
    []
  );

  return (
    <StyledSubMenuWrapper
      ref={subMenuRef}
      className={classNames('sub-menu', className)}
    >
      <A11yHidden as="h2">Sub Menu</A11yHidden>
      <StyledTopSection>
        {subMenuTopLinks.map(({ id, href, text, children }) => (
          <li key={id}>
            <a href={href}>{text}</a>
            {children && (
              <StyledTopSectionListItemUl
                $columns={children.length > 6 ? 2 : ''}
              >
                {children.map(({ id, href, text }) => (
                  <li key={id}>
                    <a href={href}>{text}</a>
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
              <a href={href}>{text}</a>
            </li>
          ))}
        </StyledBottomSectionList>
      </StyledBottomSection>
    </StyledSubMenuWrapper>
  );
}
