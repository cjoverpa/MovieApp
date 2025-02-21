import { createAction, props } from '@ngrx/store';
import { Movie } from './movie.model';

export const loadMoviesSuccess = createAction(
  '[Movie] Load Movie Success',
  props<{ movies: Movie[] }>()
);
