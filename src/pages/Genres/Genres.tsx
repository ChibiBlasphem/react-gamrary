import { useEffect, useState } from 'react';
import { fetch } from '@/utils/fetch';
import type { definitions } from '@/generated/rawg-types';
import { ColumnContainer } from '@/styled/ColumnContainer';
import { GenresCard, GenresGrid } from './Genres.styles';

export function Genres() {
  const [genres, setGenres] = useState<definitions['Genre'][] | undefined>();

  useEffect(() => {
    fetch('/genres', { query: {} }).then((genres) => {
      setGenres(genres.results);
    });
  }, []);

  if (!genres) {
    return <div>Loading...</div>;
  }

  return (
    <ColumnContainer>
      <h1>Genres</h1>
      <GenresGrid>
        {genres.map((genre) => (
          <GenresCard key={genre.slug} background={genre.image_background}>
            {genre.name}
          </GenresCard>
        ))}
      </GenresGrid>
    </ColumnContainer>
  );
}
