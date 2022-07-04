import { useEffect, useState } from 'react';
import { fetch, QueryResult } from '@/utils/fetch';
import { Pagination } from '@/components/Pagination/Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import { GamesCard, GamesGrid } from './Games.styles';
import { ColumnContainer } from '@/styled/ColumnContainer';

const GAMES_PER_PAGE = 30;

export function Games() {
  const [games, setGames] = useState<QueryResult<'/games'> | undefined>();
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const currentPage = parseInt(searchParams.get('page') ?? '1');
  const count = games?.count ?? 0;
  const totalPages = Math.ceil(count / GAMES_PER_PAGE);

  const handlePaginationSelect = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  useEffect(() => {
    fetch('/games', {
      query: {
        page: currentPage,
        page_size: GAMES_PER_PAGE,
      },
    }).then((gamesResult) => {
      setGames(gamesResult);
    });
  }, [currentPage]);

  if (!games) {
    return <div>Loading...</div>;
  }

  const pagination = (
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
        {games.results.map((game) => (
          <GamesCard key={game.slug} background={game.background_image}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </GamesCard>
        ))}
      </GamesGrid>
      {pagination}
    </ColumnContainer>
  );
}
