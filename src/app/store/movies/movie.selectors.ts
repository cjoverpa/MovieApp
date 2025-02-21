import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOVIE_STATE, MovieState } from './movie.reducer';

export const movieState = createFeatureSelector<MovieState>(MOVIE_STATE);

export const getMovies = createSelector(movieState, (state) => state.movies);

export const getMovieError = createSelector(movieState, (state) => state.error);

export const getMovieLoading = createSelector(
  movieState,
  (state) => state.loading
);
