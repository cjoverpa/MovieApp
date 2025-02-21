import { inject, Injectable } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { LoadMovies } from './movie.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class MovieEffects {
  private readonly movieService = inject(MovieService);
  private readonly action$ = inject(Actions);

  loadMovies$ = createEffect(() =>
    this.action$.pipe(
      ofType(LoadMovies.load),
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map((res: any) => LoadMovies.loadSuccess({ movies: res.results })),
          catchError((error: Error) => of(LoadMovies.loadError({ error }))),
        ),
      ),
    ),
  );
}
