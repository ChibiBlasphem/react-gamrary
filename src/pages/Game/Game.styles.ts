import { Card } from '@/components/Card/Card';
import styled from 'styled-components';

export const GameRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    margin-bottom: 12px;
  }
`;

export const GameHero = styled(Card)`
  height: 300px;
  border-radius: 16px;
`;

export const GameDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.9rem;
  font-style: italic;

  p {
    margin: 0;
  }
`;

export const GameGamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
`;

export const GameGamesCard = styled(Card)`
  aspect-ratio: 6 / 8;
`;
