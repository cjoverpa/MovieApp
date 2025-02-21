import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

import { Movie } from './movie.model';

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: Error | null;
}

export const MOVIE_STATE = 'movie';

export const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieReducer = createReducer(
  initialState,
  // on(loadMoviesSuccess, (state, { movies }) => ({
  //   ...state,
  //   movies,
  // }))
  on(MovieActions.LoadMovies.load, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieActions.LoadMovies.loadSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
  })),
  on(MovieActions.LoadMovies.loadError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
