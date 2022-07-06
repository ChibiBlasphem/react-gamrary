import { useQuery } from 'react-query';
import type { QueryParameters, QueryResult } from '@/utils/fetch';
import { fetch } from '@/utils/fetch';

export function useGames(parameters: QueryParameters<'/games'>) {
  return useQuery<QueryResult<'/games'>, Error>(
    ['games', parameters] as const,
    () => {
      return fetch('/games', parameters);
    },
    {
      keepPreviousData: true,
    },
  );
}
