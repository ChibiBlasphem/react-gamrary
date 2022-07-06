import { useQuery } from 'react-query';
import { fetch, QueryResult } from '@/utils/fetch';

export function useGenres() {
  return useQuery<QueryResult<'/genres'>, Error>('genres', () => {
    return fetch('/genres', {
      query: {},
    });
  });
}
