import { Card } from '@/components/Card/Card';
import styled from 'styled-components';

export const GenresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const GenresCard = styled(Card)`
  aspect-ratio: 16 / 9;
`;
