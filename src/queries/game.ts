import type { QueryFunction } from 'react-query';
import { useQueries } from 'react-query';
import type { QueryParameters, QueryResult } from '@/utils/fetch';
import { fetch } from '@/utils/fetch';

const gamePath = '/games/{id}';
const screensPath = '/games/{game_pk}/screenshots';
const DLCsPath = '/games/{game_pk}/additions';
const parentsPath = '/games/{game_pk}/parent-games';
const seriesPath = '/games/{game_pk}/game-series';

const fetchGame: QueryFunction<
  QueryResult<typeof gamePath>,
  ['game', QueryParameters<typeof gamePath>]
> = ({ queryKey }) => {
  const [_key, parameters] = queryKey;
  return fetch(gamePath, parameters);
};

const fetchScreenshots: QueryFunction<
  QueryResult<typeof screensPath>,
  ['game-screens', QueryParameters<typeof screensPath>]
> = ({ queryKey }) => {
  const [_key, parameters] = queryKey;
  return fetch(screensPath, parameters);
};

const fetchDLCs: QueryFunction<
  QueryResult<typeof DLCsPath>,
  ['game-dlc', QueryParameters<typeof DLCsPath>]
> = ({ queryKey }) => {
  const [_key, parameters] = queryKey;
  return fetch(DLCsPath, parameters);
};

const fetchParents: QueryFunction<
  QueryResult<typeof parentsPath>,
  ['game-parents', QueryParameters<typeof parentsPath>]
> = ({ queryKey }) => {
  const [_key, parameters] = queryKey;
  return fetch(parentsPath, parameters);
};

const fetchSeries: QueryFunction<
  QueryResult<typeof seriesPath>,
  ['game-series', QueryParameters<typeof seriesPath>]
> = ({ queryKey }) => {
  const [_key, parameters] = queryKey;
  return fetch(seriesPath, parameters);
};

export function useGame(gameSlug: string) {
  return useQueries([
    {
      queryKey: ['game', { params: { id: gameSlug } }],
      queryFn: fetchGame,
    },
    {
      queryKey: ['game-screens', { params: { game_pk: gameSlug } }],
      queryFn: fetchScreenshots,
    },
    {
      queryKey: ['game-dlc', { params: { game_pk: gameSlug } }],
      queryFn: fetchDLCs,
    },
    {
      queryKey: ['game-parents', { params: { game_pk: gameSlug } }],
      queryFn: fetchParents,
    },
    {
      queryKey: ['game-series', { params: { game_pk: gameSlug } }],
      queryFn: fetchSeries,
    },
  ]);
}
