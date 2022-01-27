import React, { useLayoutEffect, useRef, useState } from 'react';
import { TagsProps } from './TagList.types';
import {
  StyledTagListWrap,
  StyledTagListLink,
  StyledMoreButton,
} from './TagList.styled';

export function TagList({ tags, mode }: TagsProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMore, setIsMore] = useState(false);
  const [initialList, setInitialList] = useState<(string | null)[]>([]);
  const [moreList, setMoreList] = useState<(string | null)[]>([]);

  useLayoutEffect(() => {
    if (mode === 'nomore') tags && setInitialList(tags);

    if (!initialList.length) {
      const initialTags = tags;
      setInitialList(initialTags);
    } else if (initialList.length) {
      if (mode === 'nomore') return;
      // 더보기 버튼 크기
      const MORE_BUTTON_WIDTH = 53;
      // 요소별 간격
      const ITEM_MARGIN = 8;
      // 태그를 감싸고 있는 부모의 너비
      const tagWrapWidth = ref.current?.offsetWidth;
      // 각 태그 아이템 리스트
      const tagItem = ref.current?.querySelectorAll('a');

      // 태그 아이템 전체 너비를 구하기 위한 변수
      let totalItemWidth = 0;
      // 태그 아이템 전체 너비가 부모의 너비보다 작으면 return (more item으로 분류할 아이템이 없기 때문)
      if (tagItem && tagWrapWidth) {
        tagItem.forEach(
          (tagItem) => (totalItemWidth += tagItem.offsetWidth + ITEM_MARGIN)
        );

        if (totalItemWidth < tagWrapWidth) return;
      }

      // 위 코드에 따라 more item이 있으므로, isMore 상태를 변경
      setIsMore(true);

      // 초기 렌더링 아이템과 more item을 구분지어줄 배열
      const tempInitailList: (string | null)[] = [];
      const tempMoreList: (string | null)[] = [];
      let itemWidthSum = 0;
      if (tagWrapWidth && tagItem) {
        tagItem.forEach(($item) => {
          itemWidthSum += $item.offsetWidth + ITEM_MARGIN;
          if (itemWidthSum + MORE_BUTTON_WIDTH > tagWrapWidth) {
            // more item 저장
            // more 버튼이 위치해야 하므로, 버튼 크기까지 포함해서 계산해야 함.
            tempMoreList.push(($item.textContent as string).replace('#', ''));
          } else {
            // 초기 렌더링 item 저장
            tempInitailList.push(
              ($item.textContent as string).replace('#', '')
            );
          }
        });
      }

      // 초기 렌더링 배열과, more item 배열 업데이트
      setInitialList([...tempInitailList]);
      setMoreList([...tempMoreList]);
    }
  }, [initialList.length, mode, tags]);

  const handleChange = () => setIsMore(false);

  const initialItems = initialList.map((item) => {
    return (
      <StyledTagListLink key={item} href={`/search/${item}`}>
        #{item}
      </StyledTagListLink>
    );
  });

  const moreItems = moreList.map((item) => {
    return (
      <StyledTagListLink key={item} href="#">
        #{item}
      </StyledTagListLink>
    );
  });

  return (
    <StyledTagListWrap ref={ref}>
      {initialItems}
      {isMore && (
        <StyledMoreButton
          onClick={handleChange}
          type="button"
          aria-label="more"
        >
          ...
        </StyledMoreButton>
      )}
      {!isMore && moreItems}
    </StyledTagListWrap>
  );
}
