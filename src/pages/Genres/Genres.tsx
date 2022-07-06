import { useGenres } from '@/queries/genres';
import { ColumnContainer } from '@/styled/ColumnContainer';
import { GenresCard, GenresGrid } from './Genres.styles';

export function Genres() {
  const { isLoading, isError, isIdle, error, data } = useGenres();

  if (isIdle || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ColumnContainer>
      <h1>Genres</h1>
      <GenresGrid>
        {data.results.map((genre) => (
          <GenresCard key={genre.slug} background={genre.image_background}>
            {genre.name}
          </GenresCard>
        ))}
      </GenresGrid>
    </ColumnContainer>
  );
}
