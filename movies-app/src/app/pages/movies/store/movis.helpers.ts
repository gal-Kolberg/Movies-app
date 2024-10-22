import { MoviesSlice } from './movies.slice';

export function setLoading(): Partial<MoviesSlice> {
  return { loadState: 'loading' };
}

export function setIdle(): Partial<MoviesSlice> {
  return { loadState: 'idle' };
}
