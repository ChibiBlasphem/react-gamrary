import { Pagination } from '@/components/Pagination/Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import { FetchingContainer, GamesCard, GamesGrid } from './Games.styles';
import { ColumnContainer } from '@/styled/ColumnContainer';
import { useGames } from '@/queries/games';

const GAMES_PER_PAGE = 30;

export function Games() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const currentPage = parseInt(searchParams.get('page') ?? '1');
  const { isLoading, isFetching, isIdle, isError, data, error } = useGames({
    query: {
      page: currentPage,
      page_size: GAMES_PER_PAGE,
    },
  });

  if (isIdle || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const count = data.count;
  const totalPages = Math.ceil(count / GAMES_PER_PAGE);
  const handlePaginationSelect = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  const pagination = isFetching ? (
    <FetchingContainer>Games are loading...</FetchingContainer>
  ) : (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageSelect={handlePaginationSelect}
    />
  );

  return (
    <ColumnContainer>
      <h1>Games</h1>
      {pagination}
      <GamesGrid>
        {data.results.map((game) => (
          <GamesCard key={game.slug} background={game.background_image}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </GamesCard>
        ))}
      </GamesGrid>
      {pagination}
    </ColumnContainer>
  );
}
