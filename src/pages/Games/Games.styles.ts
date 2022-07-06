import { Card } from '@/components/Card/Card';
import styled from 'styled-components';

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
`;

export const GamesCard = styled(Card)`
  aspect-ratio: 6 / 8;
`;

export const FetchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
`;
