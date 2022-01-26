import React from 'react';
import { DetailRightSideProps } from './DetailRightSide.types';
import {
  StyledRightSiedWrap,
  StyledDetailTitle,
  StyledGifButtonWrap,
  StyledGifLink,
  StyledButtonGroup,
  StyledTagList,
} from './DetailRightSide.styled';
import { TagList, Title, Carousel, CardButton, Grid } from '@/components';

export function DetailRightSide({
  data,
  relatedGifs,
  relatedStickers,
  forwardRef,
}: DetailRightSideProps) {
  const buttonType: ('favorite' | 'share' | 'embed')[] = [
    'favorite',
    'share',
    'embed',
  ];
  const buttonList = buttonType.map((type) => {
    return (
      <CardButton
        key={type}
        isTextMode={true}
        buttonName={type}
        aria-label={type}
      >
        {type}
      </CardButton>
    );
  });
  return (
    <StyledRightSiedWrap>
      <StyledDetailTitle>{data.title}</StyledDetailTitle>
      <StyledGifButtonWrap>
        <StyledGifLink
          href={`//${data.source}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="바로가기"
        >
          <img src={data.images.original.webp} alt={data.title} />
        </StyledGifLink>
        <StyledButtonGroup>{buttonList}</StyledButtonGroup>
      </StyledGifButtonWrap>
      <StyledTagList>
        <TagList tags={data.tags} mode="more" />
      </StyledTagList>
      <section>
        <Title
          isIcon={false}
          as="h3"
          title="Related Stickers"
          fontsize={17}
          marginBottom={10}
          marginTop={20}
        />
        <Carousel height={140} cards={relatedStickers} />
      </section>
      <section>
        <Title
          isIcon={false}
          as="h3"
          title="Related GIFs"
          fontsize={17}
          marginBottom={10}
          marginTop={20}
        />
        <Grid gifs={relatedGifs} forwardRef={forwardRef} />
      </section>
    </StyledRightSiedWrap>
  );
}
