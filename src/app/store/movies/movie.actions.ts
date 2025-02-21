import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Movie } from './movie.model';

// export const loadMoviesSuccess = createAction(
//   '[Movie] Load Movie Success',
//   props<{ movies: Movie[] }>()
// );

// export const loadMovie = createAction('[Movie] Load Movie');

// export const loadMoviesError = createAction(
//   '[Movie] Load Movie Error',
//   props<{ error: Error }>()
// );

// ----------------------------------------------------

export const LoadMovies = createActionGroup({
  source: 'Load Movies / Actions',
  events: {
    Load: emptyProps(),
    'Load Success': props<{ movies: Movie[] }>(),
    'Load Error': props<{ error: Error }>(),
  },
});
