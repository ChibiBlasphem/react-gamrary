import { paths } from '../rawg-types';
import genres from './genres.json';
import platforms from './platforms.json';

export const data: { [k in keyof paths]+?: paths[k]['get']['responses'][200]['schema'] } = {
  '/genres': genres,
  '/platforms': platforms,
};
