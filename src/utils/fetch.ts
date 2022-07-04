import { paths } from '@/generated/rawg-types';
import { data } from '@/generated/data';

type Merge<T> = { [k in keyof T]: T[k] };

type Operation<P extends keyof paths> = paths[P]['get'];
type Parameters<P extends keyof paths> = Operation<P>['parameters'];
type GetPathParameters<P extends keyof paths> = 'path' extends keyof Parameters<P>
  ? { params: Parameters<P>['path'] }
  : never;
type GetQueryParameters<P extends keyof paths> = 'query' extends keyof Parameters<P>
  ? { query: Parameters<P>['query'] }
  : never;

export type QueryResult<P extends keyof paths> = Operation<P>['responses'][200]['schema'];

type FetchOptions<P extends keyof paths> = Merge<GetQueryParameters<P> | GetPathParameters<P>>;

export function replaceInPath(path: string, params: Record<string, string> = {}) {
  let p = path;
  for (const key in params) {
    p = p.replace(`{${key}}`, params[key]);
  }
  return p;
}

function getFromCache(path: string) {
  try {
    const cache = localStorage.getItem('cache');
    if (!cache) {
      return null;
    }

    const cacheObj = JSON.parse(cache);
    return cacheObj[path] ?? null;
  } catch {
    return null;
  }
}

function saveCache(path: string, data: unknown) {
  try {
    const cache = localStorage.getItem('cache');
    const cacheObj = cache ? JSON.parse(cache) : {};

    cacheObj[path] = data;

    localStorage.setItem('cache', JSON.stringify(cacheObj));
  } catch {}
}

async function customFetch<P extends keyof paths>(
  pathPattern: P,
  fetchOptions: FetchOptions<P>,
): Promise<QueryResult<P>> {
  if (data[pathPattern]) {
    return data[pathPattern] as QueryResult<P>;
  }

  const path = replaceInPath(pathPattern, 'params' in fetchOptions ? fetchOptions.params : {});
  const queryString = new URLSearchParams({
    key: import.meta.env.VITE_RAWG_APIKEY,
    ...('query' in fetchOptions ? fetchOptions.query : {}),
  });
  const fullpath = `${path}?${queryString}`;

  const cacheData = getFromCache(fullpath);
  if (cacheData) {
    return cacheData;
  }

  const result = await fetch(`https://api.rawg.io/api${fullpath}`, { method: 'get' });
  const responseData = await result.json();

  saveCache(fullpath, responseData);

  return responseData;
}

export { customFetch as fetch };
