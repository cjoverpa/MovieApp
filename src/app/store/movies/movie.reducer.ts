import { loadMoviesSuccess } from './movie.actions';
import { createReducer, on } from '@ngrx/store';
import { MovieState } from './movie.model';

export const initialState: MovieState = {
  movies: [],
};

export const _movieReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies
  }))
);
