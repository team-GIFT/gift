import styled from 'styled-components';
import { px2rem } from '@/styles';
import {
  StyledTopSectionListItemUlProps,
  StyledSubMenuWrapperProps,
} from './SubMenu.types';

// TODO: 반응형 : flex-direction: column;
export const StyledSubMenuWrapper = styled.div<StyledSubMenuWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  border-top: ${px2rem(8)} solid ${({ theme: { color } }) => color.black};
  background: linear-gradient(
    135deg,
    rgb(230, 70, 182) 0%,
    rgb(153, 51, 255) 100%
  );

  & a {
    white-space: nowrap;
    display: inline-block;
    // TODO: 링크의 padding 여백 -> 2번째 컬럼 상단 위치가 깨짐 (포커스 넘침)
    // 안주면 -> 너무 빡빡, 포커스 못생기게 잡힘
    padding: ${px2rem(5)};
  }
  @media screen and (max-width: 1069px) {
    height: 90vh;
    width: 100%;
    top: 55px;
    left: 0px;
  }
`;

export const StyledTopSection = styled.ul`
  display: flex;
  padding: ${px2rem(32)} ${px2rem(60)} ${px2rem(20)} ${px2rem(60)};
  justify-content: space-between;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  & a {
    margin-bottom: ${px2rem(15)};
  }

  @media screen and (max-width: 1069px) {
    margin-bottom: 5px;
    flex-direction: column;

    padding: ${px2rem(15)};

    & li {
      display: block;
      flex-wrap: wrap;
      gap: 15px;
      padding: ${px2rem(10)} 0;
      & a {
        margin-bottom: 0;
      }
    }
  }
`;

export const StyledTopSectionListItemUl = styled.ul`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  border-top: ${px2rem(1)} solid rgba(255, 255, 255, 0.4);
  padding-top: ${px2rem(16)};
  columns: ${({ $columns }: StyledTopSectionListItemUlProps) =>
    $columns ? `auto ${$columns}` : ''};
  & a {
    /* margin-bottom: ${px2rem(20)}; */
  }
  @media screen and (max-width: 1069px) {
    & li {
      padding: 0;
      border-right: ${px2rem(1)} solid rgba(255, 255, 255, 0.4);
      padding-right: ${px2rem(15)};
      margin-right: ${px2rem(5)};
      margin-bottom: ${px2rem(10)};
    }
    display: flex;
    flex-wrap: wrap;
    border-top: none;
    gap: 0;
    padding-top: 0;
  }
`;

export const StyledBottomSection = styled.div`
  display: flex;
  padding: ${px2rem(10)} ${px2rem(60)};
  background: rgba(0, 0, 0, 0.2);
  align-items: center;
  @media screen and (max-width: 1069px) {
    display: block;
    padding: ${px2rem(15)};
  }
`;

export const StyledCopyright = styled.p`
  padding: 0 ${px2rem(30)} 0 0;
  border-right: ${px2rem(1)} solid rgba(255, 255, 255, 0.4);
  margin-right: ${px2rem(30)};
  /* 기본 p의 padding 스타일 지우기 */
  margin-top: 0;
  margin-bottom: 0;
  flex-shrink: 0;
  @media screen and (max-width: 1069px) {
    border-right: none;
  }
`;

export const StyledBottomSectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: 300;

  @media screen and (max-width: ${px2rem(1069)}) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }
`;
