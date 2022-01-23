import React from 'react';
import {
  StyledSection,
  StyledWrapper,
  StyledPrimaryCard,
} from './Clips.styled';
import { Card } from '@/components';

import { trendingClipsSelector } from '@/store/featrues/giphy/giphy';
import { useSelector } from 'react-redux';

export function Clips(): JSX.Element {
  const { isLoading, cards } = useSelector(trendingClipsSelector);

  const [primaryCard, ...subCards] = cards;

  return (
    <>
      {!isLoading && (
        <StyledSection className="clips">
          <StyledPrimaryCard containerType="clips" {...primaryCard} />
          <StyledWrapper>
            {subCards.map((card) => (
              <Card key={card.id} containerType="clips" {...card} />
            ))}
          </StyledWrapper>
        </StyledSection>
      )}
    </>
  );
}
